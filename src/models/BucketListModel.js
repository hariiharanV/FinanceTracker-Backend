import mongoose from 'mongoose'
import mongooseSequence from 'mongoose-sequence'

const AutoIncrement = mongooseSequence(mongoose);

const BucketListSchema = new mongoose.Schema({
  id_bucket:{type:Number, unique: true},
  username:{type:String,required:true},
  year:{type:String, required:true},
  checked:{type:Boolean,required:true},
  name:{type:String,required:true},
});

BucketListSchema.plugin(AutoIncrement, { inc_field: 'id_bucket' });

const BucketList = mongoose.model('BucketList', BucketListSchema);

export default BucketList
