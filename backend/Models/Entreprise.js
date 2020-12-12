const mongoose = require("mongoose");

const entreprisechema = mongoose.Schema({
  _id: Number,
  nom: String,
  benef: [Number],
  donut: {
    gain: {
      labels: [String],

      datasets: [{
        data: [Number],
        backgroundColor: [String],
        hoverBackgroundColor: [String],
      }],
    },
    dep: {
      labels: [String],

      datasets: [{
        data: [Number],
        backgroundColor: [String],
        hoverBackgroundColor: [String],
      }],
    },
  },
  commentaire: [
    {
      position: String,
      comType: String,
      title: String,
      text: String,
      date: Date,
    },
  ],
  photo_prof: String,
  myEventsList: [
    {
      title: String,
      start: Date,
      end: Date,
      allDay: Boolean,
    },
  ],
});

const Entreprise = mongoose.model("entreprise", entreprisechema);

module.exports = Entreprise;
