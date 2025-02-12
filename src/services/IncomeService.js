import Income from "../models/IncomeModel.js"

const createIncome = async(incomeData)=>{

    try
    {

        console.log(incomeData)
        const income = new Income(incomeData);
        await income.save();
        return income;

    }catch(err)
    {
        throw new Error(err);
    }

}

const fetchIncome = async(month)=>{

    try{
        
       const response = await Income.findOne({month});

       if(!response)
       {
            return {message:"Income does not exist"}
       }
       
       return response;

    }catch(err)
    {
        throw new err('Error fetching the Income');
    }
}

const fetchIncomeByMonthAndYear = async(month,year)=>{

    try{
        
       const response = await Income.findOne({month,year});

       if(!response)
       {
            return {message:"Income does not exist"}
       }
       
       return response;

    }catch(err)
    {
        throw new err('Error fetching the Income');
    }
}

const fetchIncomeByMonthYearAndUser = async(month,year,username)=>{

    try{
        
       const response = await Income.findOne({month,year,username});

       if(!response)
       {
            return {message:"Income does not exist"}
       }
       
       return response;

    }catch(err)
    {
        throw new err('Error fetching the Income');
    }
}

const fetchIncomeByUserAndYear = async(username,year)=>{
    try{
        
        const response = await Income.find({username,year});
 
        if(!response)
        {
             return {message:"Income does not exist"}
        }
        
        return response;
 
     }catch(err)
     {
         throw new err('Error fetching the Income');
     }
}

const updateIncome = async(month,incomeData)=>{

    try{

        const response = await Income.findOneAndUpdate({month},incomeData,{new:true});

        if(!response)
        {
            throw new Error("Month does not exist for update")
        }

        return response;
    }catch(err)
    {
        throw new Error(err.message);
    }
}


export {createIncome,fetchIncome, updateIncome,fetchIncomeByMonthYearAndUser,
    fetchIncomeByUserAndYear
}