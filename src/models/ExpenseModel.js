import mongoose from 'mongoose'
import mongooseSequence from 'mongoose-sequence'

const AutoIncrement = mongooseSequence(mongoose);

const ExpenseSchema = new mongoose.Schema({
  id: { type: Number, unique: true },  // Automatically generated field
  year:{type:String,required:true},
  username:{type:String,required:true},
  month:{type:String, required:true},
  expenditureType: { type: String, required: true },
  expenseDate:{type:Date,
    required:true,
    set: function (value) {
            const parts = value.split('/');
            if (parts.length === 3) {
                return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`); // yyyy-mm-dd
            }
            throw new Error('Invalid date format. Please use dd/mm/yyyy.');
        },},
  plannedExpense: { type: Number, required: true },
  givenBy: { type: String, required: true },
  settledBy: { type: String, required: true },
  finalAmountSettled: { type: Number, required: true },
  note: {type:String}
});

ExpenseSchema.plugin(AutoIncrement, { inc_field: 'id' });

const Expense = mongoose.model('Expense', ExpenseSchema);

export default Expense
