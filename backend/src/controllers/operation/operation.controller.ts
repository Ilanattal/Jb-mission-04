import { Request, Response } from 'express';
import AccountOperation from '/Users/user/Documents/Jb-mission-04/backend/src/models/AccountOperation';

export async function getOperationsByAccountNumber(req: Request, res: Response) {
  const { accountNumber } = req.params;
  try {
    const operations = await AccountOperation.find({ accountNumber });
    res.json(operations);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des opérations.' });
  }
}

export async function createOperation(req: Request, res: Response) {
  try {
    const operation = new AccountOperation(req.body);
    const saved = await operation.save();
    res.status(201).json(saved);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

