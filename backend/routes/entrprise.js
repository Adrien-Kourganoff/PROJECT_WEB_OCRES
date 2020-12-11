const Entreprise = require("../Models/Entreprise.js");
const express = require("express");
const router = express.Router();
const addEventEntreprise = require('../services/entreprise/addEventEntreprise');

router.put('/:id', addEventEntreprise)

router.get('/:id', async (req, res) => {
  try {
     const entreprise = await Entreprise.findOne({ _id : req.params.id});
     console.log("entreprise", entreprise)
     res.status(200).json({ entreprise })
  } catch (err) {
    res.status(500).json({ error: err })
  }
})


module.exports = router;
