import jwt from "jsonwebtoken";


const userAuth = async(req,res,next)=>{

    const {token} = req.cookies;

    if(!token)
    {
        return res.json({success:false, message:"Not Authorised. Login Again"});
    }

    try
    {

        const tokenDecode = jwt.verify(token,process.env.JWT_SECRET);

        if(tokenDecode.id)
        {
            req.body.userId = tokenDecode.id;
        }else{
            return res.json({success:false, message:"Not Authorised. Login Again"});
        }


        console.log("calling next");
        
        next();

    }catch(err)
    {
        return res.json({success:false, message:err.message});
    }

}


export default userAuth