import express from 'express';
import mongoose from 'mongoose';
import config from 'config';
import cors from 'cors';
import operationRoutes from './routers/operations';

const app = express();
app.use(cors());
app.use(express.json());

export async function start() {
  const host = config.get<string>('mongoose.host');
  const port = config.get<number>('mongoose.port');
  const dbName = config.get<string>('mongoose.database');

  const uri = `mongodb://${host}:${port}/${dbName}`;

  try {
    await mongoose.connect(uri);
    console.log('✅ Connected to MongoDB:', uri);
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

app.use('/operations', operationRoutes);

export default app;