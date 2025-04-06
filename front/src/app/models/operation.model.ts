export type OperationType = 'deposit' | 'withdrawal' | 'loan';

export interface Operation {
  accountNumber: string;
  type: OperationType;
  amount: number;
  interest?: number;
  payments?: number;
  loanDate?: Date;
  date?: Date; // date de création de l'opération (commune)
}