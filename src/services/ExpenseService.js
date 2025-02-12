import Expense from "../models/ExpenseModel.js";


// Service to create a new expense
const createExpense = async (expenseData) => {
    try {
      const expense = new Expense(expenseData);
      await expense.save();
      return expense;
    } catch (err) {
      console.log(err);
      throw new Error('Error creating new expense');
     
    }
  };


  // Service to fetch all expenses
const fetchExpenses = async () => {
    try {
      const expense = await Expense.find();
      return expense;
    } catch (err) {
      console.log(err);
      throw new Error('Error fetching expenses');
     
    }
  };

  const fetchExpenseById = async(id)=>{
    try{

      const response = await Expense.findOne({id});

      if(!response)
      {
        return {message:"Id does not exist"}
      }

      return response;

    }catch(err)
    {
        throw new Error(err);
    }
  }


  const deleteExpense = async(id)=>{
    try{
          const response = await Expense.findOneAndDelete({id});

        if(!response)
        {
          return {message:"Id does not Exist"}
        }

          return response;
    }catch(err)
    {
      throw new Error(err);
    }
  }

  const updateExpense = async(id,expenseData) =>{

    try{

      const response = await Expense.findOneAndUpdate({id},expenseData,{new:true});

      return response;

    }catch(err)
    {
      throw new Error(err);
    }
  }


  const fetchExpenseByMonth = async(month)=>{
    try{

      const response = await Expense.find({month});

      if(!response)
      {
        return {message:"Month does not exist"}
      }

      return response;

    }catch(err)
    {
        throw new Error(err);
    }
  }

  const fetchExpenseByMonthAndYear = async(month,year)=>{
    try{

      const response = await Expense.find({month,year});

      console.log(response)

      if(!response)
      {
        return {message:"Month & Year does not exist"}
      }

      return response;

    }catch(err)
    {
        throw new Error(err);
    }
  }

  const fetchExpenseByMonthYearAndUser = async(month,year,username)=>{
    try{

      const response = await Expense.find({month,year,username});

      console.log(response)

      if(!response)
      {
        return {message:"Month & Year does not exist"}
      }

      return response;

    }catch(err)
    {
        throw new Error(err);
    }
  }

  const fetchExpenseByUserAndYear = async(year,username)=>{
    try{

      const response = await Expense.find({year,username});

      if(!response)
      {
        return {message:"Month & Year does not exist"}
      }

      return response;

    }catch(err)
    {
        throw new Error(err);
    }
  }

  export {createExpense, fetchExpenses,deleteExpense, fetchExpenseByMonthAndYear
    ,updateExpense, fetchExpenseById, fetchExpenseByMonth, fetchExpenseByUserAndYear,
    fetchExpenseByMonthYearAndUser}
