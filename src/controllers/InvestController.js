import { createInvestment,fetchAllInvestments, fetchInvestmentByMonth, fetchInvestmentCategories, 
    createInvestmentCategory, deleteInvestCategoryById, deleteInvestmentById, fetchInvestmentByMonthAndYear
    ,updateInvestmentById, fetchInvestmentById, fetchInvestmentByMonthYearAndUser,
    fetchInvestmentCategoryByUser,fetchInvestmentByUserAndYear } from "../services/InvestService.js";




const createInvestmentController = async(req,res)=>{

    try{

        const investmentData = req.body;    
        const response = await createInvestment(investmentData);

        return res.status(201).json(response);
        
    }catch(err)
    {
        return res.status(400).json({message:err.message});
    }
}

const updateInvestmentController = async(req,res)=>{

    try{
        const {id} = req.params;
        const investmentData = req.body;    
        const response = await updateInvestmentById(id,investmentData);

        return res.status(200).json(response);
        
    }catch(err)
    {
        return res.status(400).json({message:err.message});
    }
}

const createInvestCategoryController = async(req,res)=>{

    try{
        
        console.log('Creating new investment category')
        const investCategoryData = req.body;    
        const response = await createInvestmentCategory(investCategoryData);

        return res.status(201).json(response);
        
    }catch(err)
    {
        return res.status(400).json({message:err.message});
    }

}

const createInvestCategoryForUserController = async(req,res)=>{

    try{

        console.log('Creating new investment category')
        const investCategoryData = req.body;    
        const response = await createInvestmentCategory(investCategoryData);

        return res.status(201).json(response);
        
    }catch(err)
    {
        return res.status(400).json({message:err.message});
    }

}

const fetchInvestmentsController = async(req,res)=>{
    try{   
        const response = await fetchAllInvestments();

        return res.status(200).json(response);
        
    }catch(err)
    {
        return res.status(404).json({message:err.message});
    }

}

const deleteInvestmentController = async(req,res)=>{
    try{  
        
        const {id} = req.params;
        
        const response = await deleteInvestmentById(id);

        return res.status(200).json(response);
        
    }catch(err)
    {
        return res.status(404).json({message:err.message});
    }
}

const fetchInvestCategoryController = async(req,res)=>{

    try{ 
        const response = await fetchInvestmentCategories();

        return res.status(200).json(response);
        
    }catch(err)
    {
        return res.status(404).json({message:err.message});
    }

}

const fetchInvestCategoryByUserController = async(req,res)=>{

    try{ 
        
        const {username} = req.params;

        const response = await fetchInvestmentCategoryByUser(username);

        return res.status(200).json(response);
        
    }catch(err)
    {
        return res.status(404).json({message:err.message});
    }

}

const fetchInvestmentByMonthController = async(req,res)=>{
    try{   

        const {month} = req.params;

        const response = await fetchInvestmentByMonth(month);

        return res.status(200).json(response);
        
    }catch(err)
    {
        return res.status(404).json({message:err.message});
    }
}

const fetchInvestmentByMonthAndYearController = async(req,res)=>{
    try{   

        const {month,year} = req.params;

        const response = await fetchInvestmentByMonthAndYear(month,year);

        return res.status(200).json(response);
        
    }catch(err)
    {
        return res.status(404).json({message:err.message});
    }
}

const fetchInvestmentByMonthYearAndUserController = async(req,res)=>{
    try{   

        const {month,year,username} = req.params;

        const response = await fetchInvestmentByMonthYearAndUser(month,year,username);

        return res.status(200).json(response);
        
    }catch(err)
    {
        return res.status(404).json({message:err.message});
    }
}

const fetchInvestmentByUserAndYearController = async(req,res)=>{
    try{   

        const {username,year} = req.params;

        const response = await fetchInvestmentByUserAndYear(username,year);

        return res.status(200).json(response);
        
    }catch(err)
    {
        return res.status(404).json({message:err.message});
    }
}

const fetchInvestmentByIdController = async(req,res)=>{
    try{   

        const {id} = req.params;

        const response = await fetchInvestmentById(id);

        return res.status(200).json(response);
        
    }catch(err)
    {
        return res.status(404).json({message:err.message});
    }
}

const deleteInvestCategoryController = async(req,res)=>{
    try{   

        const {id} = req.params;

        const response = await deleteInvestCategoryById(id);

        return res.status(200).json(response);
        
    }catch(err)
    {
        return res.status(404).json({message:err.message});
    }
}

export {createInvestmentController,fetchInvestmentsController, createInvestCategoryController, 
    fetchInvestmentByMonthController, fetchInvestCategoryController, updateInvestmentController,
    deleteInvestCategoryController, deleteInvestmentController, fetchInvestmentByIdController,
    fetchInvestmentByMonthAndYearController,fetchInvestmentByMonthYearAndUserController,
    fetchInvestCategoryByUserController, fetchInvestmentByUserAndYearController,createInvestCategoryForUserController}