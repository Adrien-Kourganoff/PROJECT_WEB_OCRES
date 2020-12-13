const mongoose = require("mongoose");

const entreprisechema = mongoose.Schema({
  _id: Number,
  nom: String,
  benef: [Number],
  donut: {
    gain:  [Number],
    dep: [Number],
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
  items: [
    {
		  text: String,
		  key: String,
    }
		],
});

const Entreprise = mongoose.model("entreprise", entreprisechema);

module.exports = Entreprise;
