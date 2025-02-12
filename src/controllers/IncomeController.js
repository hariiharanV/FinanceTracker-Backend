
import {createIncome, fetchIncome, updateIncome,fetchIncomeByMonthYearAndUser,
    fetchIncomeByUserAndYear
} from '../services/IncomeService.js'

const createIncomeController = async(req,res)=>{

    try{

        const incomeData = req.body;    
        const response = await createIncome(incomeData);

        return res.status(201).json(response);
    }catch(err)
    {
        return res.status(400).json({message:err.message});
    }

}

const fetchIncomeController = async(req,res)=>{

    try
    {
        const {month} = req.params;

        const response = await fetchIncome(month);

        return res.status(200).json(response);
    }catch(err)
    {
        return res.status(404).json({message:err.message});
    }

}

const fetchIncomeByMonthAndYearController = async(req,res)=>{

    try
    {
        const {month,year} = req.params;

        const response = await fetchIncomeByMonthAndYear(month,year);

        return res.status(200).json(response);
    }catch(err)
    {
        return res.status(404).json({message:err.message});
    }
}

const fetchIncomeByMonthYearAndUserController = async(req,res)=>{

    try
    {
        const {month,year,username} = req.params;

        const response = await fetchIncomeByMonthYearAndUser(month,year,username);

        return res.status(200).json(response);
    }catch(err)
    {
        return res.status(404).json({message:err.message});
    }
}

const fetchIncomeByUserAndYearController = async(req,res)=>{

    try
    {
        const {username,year} = req.params;

        const response = await fetchIncomeByUserAndYear(username,year);

        return res.status(200).json(response);
    }catch(err)
    {
        return res.status(404).json({message:err.message});
    }
}

const updateIncomeController = async(req,res)=>{

    try{

        const {month} = req.params;

        const response = await updateIncome(month,req.body);

        return res.status(200).json(response);
    }catch(err)
    {
        return res.status(400).json({message:err.message})
    }
}


export {createIncomeController,fetchIncomeController, fetchIncomeByMonthYearAndUserController,
    fetchIncomeByMonthAndYearController, updateIncomeController, fetchIncomeByUserAndYearController}