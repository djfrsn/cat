import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('User', userSchema);
