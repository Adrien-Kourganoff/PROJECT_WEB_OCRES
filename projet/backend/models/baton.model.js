const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BatonSchema = new Schema({
  amt: {
    type:Number,
    unique:false,
    trim: true,
  },
  happiness: {
    type: Number,
    unique:false,
    trim: true,
  },
  jour: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});
const Baton = mongoose.model('Semaine', BatonSchema);

module.exports = Baton;
