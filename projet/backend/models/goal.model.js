const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GoalSchema = new Schema({
  objectif: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  }
});

const Goal = mongoose.model('Goal', GoalSchema);

module.exports = Goal;
