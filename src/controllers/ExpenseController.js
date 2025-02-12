import { createExpense, fetchExpenses, fetchExpenseByMonthAndYear,
  deleteExpense, updateExpense, fetchExpenseById, fetchExpenseByMonth,
  fetchExpenseByMonthYearAndUser,fetchExpenseByUserAndYear } from "../services/ExpenseService.js";


const createExpenseController = async (req, res) => {
    try {
      const expenseData = req.body;  
      const response = await createExpense(expenseData);
      res.status(201).json(response); 
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };


  const fetchAllExpensesController = async (req, res) => {
    try {
      const response = await fetchExpenses();
      res.status(200).json(response); 
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  const fetchExpenseController = async (req,res)=>{

    try{

      const {id} = req.params;

      const response = await fetchExpenseById(id);

      return res.status(200).json(response);
    }catch(err)
    {
      return res.status(404).json({message:err.message})
    }
  }

  const fetchExpenseByMonthController = async (req,res)=>{

    try{

      const {month} = req.params;

      const response = await fetchExpenseByMonth(month);

      return res.status(200).json(response);
    }catch(err)
    {
      return res.status(404).json({message:err.message})
    }
  }

  const fetchExpenseByMonthAndYearController = async (req,res)=>{

    try{

      const {month,year} = req.params;

      const response = await fetchExpenseByMonthAndYear(month,year);

      return res.status(200).json(response);
    }catch(err)
    {
      return res.status(404).json({message:err.message})
    }
  }


  const fetchExpenseByMonthYearAndUserController = async (req,res)=>{

    try{

      const {month,year,username} = req.params;

      const response = await fetchExpenseByMonthYearAndUser(month,year,username);

      return res.status(200).json(response);
    }catch(err)
    {
      return res.status(404).json({message:err.message})
    }
  }

  const fetchExpenseByUserAndYearController = async (req,res)=>{

    try{

      const {year,username} = req.params;

      const response = await fetchExpenseByUserAndYear(year,username);

      return res.status(200).json(response);
    }catch(err)
    {
      return res.status(404).json({message:err.message})
    }
  }


  const deleteExpenseById = async (req,res) =>{
    const {id} = req.params;
    try{
      const response = await deleteExpense(id);
      res.status(200).json(response);
    }catch(err)
    {
      res.status(400).json({message:err.message});
    }
  }

  const UpdateExpenseController = async(req,res) =>{

      const {id} = req.params;
      const expenseData = req.body;

      try{

          const response = await updateExpense(id,expenseData);

          res.status(200).json(response);

      }catch(err)
      {
        res.status(400).json({message:err.message})
      }


  }


  export {createExpenseController,fetchAllExpensesController, fetchExpenseByMonthAndYearController,
    deleteExpenseById, UpdateExpenseController, fetchExpenseController, fetchExpenseByUserAndYearController,
    fetchExpenseByMonthYearAndUserController, fetchExpenseByMonthController}