import express from 'express'
import userAuth from '../middleware/userAuth.js';
import { createExpenseController , fetchAllExpensesController, fetchExpenseByMonthAndYearController,
    fetchExpenseByMonthController, fetchExpenseController, deleteExpenseById, UpdateExpenseController,
    fetchExpenseByMonthYearAndUserController, fetchExpenseByUserAndYearController} from '../controllers/ExpenseController.js';

const router = express.Router();

router.post('/',userAuth,createExpenseController)

router.get('/',userAuth,fetchAllExpensesController);

router.delete('/:id',userAuth,deleteExpenseById)

router.put('/:id',userAuth,UpdateExpenseController)

router.get('/id/:id',userAuth,fetchExpenseController)

router.get('/month/:month',userAuth,fetchExpenseByMonthController)

router.get('/year/:year/month/:month',userAuth,fetchExpenseByMonthAndYearController)

router.get('/username/:username/year/:year',userAuth,fetchExpenseByUserAndYearController)

router.get('/username/:username/year/:year/month/:month',userAuth,fetchExpenseByMonthYearAndUserController)


export default router