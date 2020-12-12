const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AstuceSchema = new Schema({
  phrase: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  }
});

const Astuce = mongoose.model('phrase', AstuceSchema);

module.exports = Astuce;
