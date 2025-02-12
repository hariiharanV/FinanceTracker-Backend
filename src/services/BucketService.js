import BucketList from "../models/BucketListModel.js";

const createBucketList = async(bucketData)=>{

    try
    {
        const bucket = new BucketList(bucketData);
        await bucket.save();
        return bucket;

    }catch(err)
    {
        throw new err('Error Creating new Income');
    }
}

const fetchBucketList = async(year)=>{

    try{
        
       const response = await BucketList.find({year});

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

const fetchBucketListByUserAndYear = async(username,year)=>{

    try{
        
       const response = await BucketList.find({username,year});

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


const updateBucketList = async(id_bucket,updateData)=>{

    try{
        
       const response = await BucketList.findOneAndUpdate({id_bucket},updateData);

       return response;

    }catch(err)
    {
        throw new err('Error fetching the Income');
    }
}


export {createBucketList, fetchBucketList, updateBucketList, fetchBucketListByUserAndYear}