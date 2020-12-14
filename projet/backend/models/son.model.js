const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SonSchema = new Schema({

    url:{
        type:String
      },
});

const Son = mongoose.model('Son', SonSchema);

module.exports = Son;