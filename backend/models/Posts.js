const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    tempHaute: {
        type: String,
        required: true
    },
    lieuTempHaute: {
        type: String,
        required: true
    },
    anneeTempHaute: {
        type: String, 
        required: true
    },
    tempBasse: {
        type: String,
        required: true
    },
    lieuTempBasse: {
        type: String, 
        required: true
    },
    anneeTempBasse: {
        type: String, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', PostSchema, 'Posts');
