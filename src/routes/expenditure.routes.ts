import { Router } from 'express';
import * as expenditureControllers from '../controllers/expenditure.controllers';

const router = Router();

router
  .route('/')
    .get(expenditureControllers.getExpenditures)
    .post(expenditureControllers.createExpenditure);

router
  .route('/:id')
    .get(expenditureControllers.getExpenditure)
    .put(expenditureControllers.updateExpenditure)
    .delete(expenditureControllers.deleteExpenditure);

export default router;
