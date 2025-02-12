import mongoose from "mongoose";
import mongooseSequence from 'mongoose-sequence'

const AutoIncrement = mongooseSequence(mongoose);

const investmentSchema = new mongoose.Schema({
        id_invest: { type: Number, unique: true }, 
        year:{type:String,required:true},
        username:{type:String,required:true},
        month:{type:String,required:true},
        investmentType:{type:String,required:true},
        investmentDate:{type:Date,
                required:true,
                set: function (value) {
                        const parts = value.split('/');
                        if (parts.length === 3) {
                            return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`); // yyyy-mm-dd
                        }
                        throw new Error('Invalid date format. Please use dd/mm/yyyy.');
                    },},
        investmentCategory:{type:String,required:true},
        amount:{type:Number,required:true},
        investedBy:{type:String,required:true}
});

investmentSchema.plugin(AutoIncrement, { inc_field: 'id_invest' });


const Investment = mongoose.model('Investment',investmentSchema)


export default Investment