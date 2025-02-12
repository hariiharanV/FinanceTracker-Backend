import mongoose from 'mongoose'
import mongooseSequence from 'mongoose-sequence'

const AutoIncrement = mongooseSequence(mongoose);

const InvestCategorySchema = new mongoose.Schema({
  id_investCat:{type:Number, unique: true},
  category:{type:String,required:true},
  username:{type:String,required:true}
});

InvestCategorySchema.plugin(AutoIncrement, { inc_field: 'id_investCat' });

const InvestCategory = mongoose.model('InvestCategory', InvestCategorySchema);

export default InvestCategory
