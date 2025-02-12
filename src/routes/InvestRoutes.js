import express from 'express'
import userAuth from '../middleware/userAuth.js';
import { createInvestmentController, fetchInvestmentsController, createInvestCategoryController, 
    fetchInvestmentByMonthController, fetchInvestCategoryController, updateInvestmentController,
     deleteInvestCategoryController, deleteInvestmentController, fetchInvestmentByIdController,
    fetchInvestmentByMonthAndYearController, fetchInvestmentByMonthYearAndUserController,
    fetchInvestCategoryByUserController,fetchInvestmentByUserAndYearController,createInvestCategoryForUserController  } from '../controllers/InvestController.js';


const router = express.Router();

console.log("Calling routes")

router.post("/",userAuth,createInvestmentController);

router.get("/",userAuth,fetchInvestmentsController)

router.get("/category",userAuth,fetchInvestCategoryController)

router.get("/category/username/:username",userAuth,fetchInvestCategoryByUserController)

router.get("/id/:id",userAuth,fetchInvestmentByIdController)

router.get("/month/:month",userAuth,fetchInvestmentByMonthController)

router.get("/year/:year/month/:month",userAuth,fetchInvestmentByMonthAndYearController)

router.get("/username/:username/year/:year",userAuth,fetchInvestmentByUserAndYearController)

router.get("/username/:username/year/:year/month/:month",userAuth,fetchInvestmentByMonthYearAndUserController)

router.post("/category",userAuth,createInvestCategoryController)


router.delete("/category/:id",userAuth,deleteInvestCategoryController)

router.delete("/:id",userAuth,deleteInvestmentController);

router.put("/:id",userAuth,updateInvestmentController)



export default router