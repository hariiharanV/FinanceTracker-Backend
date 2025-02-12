
import { createBucketList, fetchBucketList, updateBucketList,fetchBucketListByUserAndYear } from "../services/BucketService.js";

const createBucketListController = async(req,res)=>{

    try{

        const bucketData = req.body;    
        const response = await createBucketList(bucketData);

        return res.status(201).json(response);
        
    }catch(err)
    {
        return res.status(400).json({message:err.message});
    }
}

const fetchBucketListController = async(req,res)=>{
    try{   

        const {year} = req.params;

        const response = await fetchBucketList(year);

        return res.status(200).json(response);
        
    }catch(err)
    {
        return res.status(404).json({message:err.message});
    }
}

const fetchBucketListByUserAndYearController = async(req,res)=>{
    try{   

        const {year,username} = req.params;

        const response = await fetchBucketListByUserAndYear(username,year);

        return res.status(200).json(response);
        
    }catch(err)
    {
        return res.status(404).json({message:err.message});
    }
}

const updateBucketListController = async(req,res)=>{
    try{   

        const {id} = req.params;
        const updateData = req.body;

        const response = await updateBucketList(id,updateData);

        return res.status(200).json(response);
        
    }catch(err)
    {
        return res.status(404).json({message:err.message});
    }
}


export {createBucketListController,fetchBucketListController, fetchBucketListByUserAndYearController, 
    updateBucketListController}