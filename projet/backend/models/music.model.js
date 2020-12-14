const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MusicSchema = new Schema({
  titre: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,},

    audio:{
      type:String
    },
  
    duration: {
      type: Number,
      required: true,},
  
    date: {
        type: Date,
        required: true,},

        img:
        {
          type:String
        }

});


const Music = mongoose.model('Music', MusicSchema);

module.exports = Music;
