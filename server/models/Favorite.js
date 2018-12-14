import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const favoriteSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: 'Please enter a user id!'
  },
  url: {
    type: String,
    required: 'Please enter a url!',
    unique: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Favorite', favoriteSchema);
