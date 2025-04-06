import { Router } from 'express';
import { getOperationsByAccountNumber, createOperation } from '../controllers/operation/operation.controller';

const router = Router();

router.get('/:accountNumber', getOperationsByAccountNumber);
router.post('/', createOperation);

export default router;