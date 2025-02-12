import mongoose from 'mongoose'

const IncomeSchema = new mongoose.Schema({
  month:{type:String, required:true},
  year:{type:String,required:true},
  username:{type:String,required:true},
  monthlyIncome:{type:Number,required:true},
});


const Income = mongoose.model('Income', IncomeSchema);

export default Income
