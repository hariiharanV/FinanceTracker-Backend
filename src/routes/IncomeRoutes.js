import { createIncomeController, fetchIncomeController, fetchIncomeByMonthAndYearController,fetchIncomeByMonthYearAndUserController,
     updateIncomeController,fetchIncomeByUserAndYearController } from '../controllers/IncomeController.js';

import express from 'express'

const router = express.Router();

router.post('/',createIncomeController)

router.get('/year/:year/month/:month',fetchIncomeByMonthAndYearController)

router.get('/username/:username/year/:year',fetchIncomeByUserAndYearController)

router.get('/username/:username/year/:year/month/:month',fetchIncomeByMonthYearAndUserController)

router.get('/:month',fetchIncomeController)

router.put('/:month',updateIncomeController)



export default router