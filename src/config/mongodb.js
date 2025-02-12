import mongoose from "mongoose";


const connectDB = async()=>{

    mongoose.connection.on('connected',()=>console.log('Connected to DB'));
    await mongoose.connect(`mongodb+srv://harii1996:harii1996@cluster0.57w2q.mongodb.net/financeTracker`);
}


export default connectDB