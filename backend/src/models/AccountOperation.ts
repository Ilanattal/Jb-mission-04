import { Schema, model, Document } from 'mongoose';

export type OperationType = 'deposit' | 'withdrawal' | 'loan';

export interface IAccountOperation extends Document {
  accountNumber: string;
  type: OperationType;
  amount: number;
  date?: Date;
  interest?: number;
  payments?: number;
  loanDate?: Date;
}

const AccountOperationSchema = new Schema<IAccountOperation>({
  accountNumber: { type: String, required: true },
  type: { type: String, enum: ['deposit', 'withdrawal', 'loan'], required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  interest: {
    type: Number,
    required: function () {
      return this.type === 'loan';
    }
  },
  payments: {
    type: Number,
    required: function () {
      return this.type === 'loan';
    }
  },
  loanDate: {
    type: Date,
    required: function () {
      return this.type === 'loan';
    }
  }
});

export default model<IAccountOperation>('AccountOperation', AccountOperationSchema);