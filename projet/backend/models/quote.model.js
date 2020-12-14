const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MotivationSchema = new Schema({
    quote: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    auteur : {
      type: String,
      required: true,
      unique: true,
      trim: true,
    }
  });

  const Motivation = mongoose.model('Motivation quote', MotivationSchema);

  module.exports = Motivation;