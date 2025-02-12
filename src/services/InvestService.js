import Investment from "../models/InvestmentModel.js";
import InvestCategory from "../models/InvestCategoryModel.js";


const createInvestment= async(investData)=>{

    try
    {
        const investment = new Investment(investData);
        await investment.save();
        return investment;

    }catch(err)
    {
        throw new Error(err.message);
    }
}

const updateInvestmentById = async(id_invest,investData)=>{

    try
    {
        const investment = await Investment.findOneAndUpdate({id_invest},investData);
        return investment;
    }catch(err)
    {
        throw new Error(err.message);
    }
}

const deleteInvestmentById = async(id_invest)=>{

    try
    {
        const investment = await Investment.findOneAndDelete({id_invest})

        if(!investment){
            return {message:"Investment Id does not exist to delete"}
        }

        return investment;

    }catch(err)
    {
        throw new Error(err.message);
    }
}

const fetchAllInvestments = async()=>{

    try
    {
        const investmentsData = Investment.find();

        return investmentsData;

    }catch(err)
    {
        throw new Error(err.message);
    }
}

const fetchInvestmentCategories = async()=>{

    try
    {
        const investmentCategoryData = await InvestCategory.find();

        return investmentCategoryData;

    }catch(err)
    {
        throw new Error(err.message);
    }
}

const fetchInvestmentCategoryByUser = async(username)=>{

    try
    {

        const investmentCategoryData = await InvestCategory.find({username});

        return investmentCategoryData;

    }catch(err)
    {
        throw new Error(err.message);
    }
}


const deleteInvestCategoryById = async(id_investCat)=>{

    try
    {
        const investmentCategoryData = await InvestCategory.findOneAndDelete({id_investCat})

        if(!investmentCategoryData)
        {
            return {message:"Id does not exist to delete"}
        }

        return investmentCategoryData;

    }catch(err)
    {
        throw new Error(err.message);
    }
}


const fetchInvestmentByMonth = async(month)=>{

    try
    {
        const investmentData = await Investment.find({month});


        return investmentData;

    }catch(err)
    {
        throw new Error(err.message);
    }
}

const fetchInvestmentByMonthAndYear = async(month,year)=>{

    try
    {
        const investmentData = await Investment.find({month,year});


        return investmentData;

    }catch(err)
    {
        throw new Error(err.message);
    }
}

const fetchInvestmentByUserAndYear = async(username,year)=>{
    try
    {
        const investmentData = await Investment.find({username,year});


        return investmentData;

    }catch(err)
    {
        throw new Error(err.message);
    }
}

const fetchInvestmentByMonthYearAndUser = async(month,year,username)=>{

    try
    {
        const investmentData = await Investment.find({month,year,username});


        return investmentData;

    }catch(err)
    {
        throw new Error(err.message);
    }
}

const fetchInvestmentById = async(id_invest)=>{

    try
    {
        const investmentData = await Investment.findOne({id_invest});

        if(!investmentData)
        {
            return {message:"Id does not exist"}
        }

        return investmentData;

    }catch(err)
    {
        throw new Error(err.message);
    }
}

const createInvestmentCategory = async(investCatData)=>{

    try
    {
        const investCategory = new InvestCategory(investCatData);
        await investCategory.save();
        return investCategory;

    }catch(err)
    {
        throw new Error(err.message);
    }

}





export {createInvestment,fetchAllInvestments, fetchInvestmentByMonthAndYear,fetchInvestmentByMonthYearAndUser,
    fetchInvestmentById, updateInvestmentById,fetchInvestmentByMonth, fetchInvestmentCategoryByUser,
    deleteInvestmentById, deleteInvestCategoryById, fetchInvestmentByUserAndYear,
    fetchInvestmentCategories, createInvestmentCategory}