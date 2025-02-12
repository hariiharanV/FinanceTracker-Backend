import mongoose from 'mongoose'

const connect = () => {
  mongoose.connect('mongodb://localhost:27017/expense', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch(err => console.log('MongoDB connection error:', err));
};

export default {connect};