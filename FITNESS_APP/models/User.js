const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  points: { type: Number, default: 0 },
  rank: { type: String, default: 'Beginner' },
  height: { type: Number },       // in cm
  weight: { type: Number },       // in lbs
  age: { type: Number },
  gender: { type: String }
});

module.exports = mongoose.model('User', userSchema);
