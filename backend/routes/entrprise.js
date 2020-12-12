const Entreprise = require("../Models/Entreprise.js");
const express = require("express");
const router = express.Router();
const addEventEntreprise = require('../services/entreprise/addEventEntreprise');
const addComEntreprise = require('../services/entreprise/addComEntreprise');
const deleteTaskEntreprise = require('../services/entreprise/deleteTaskEntreprise');
const addTaskEntreprise = require('../services/entreprise/addTaskEntreprise');

router.put('/event/:id', addEventEntreprise)
router.put('/commentaire/:id', addComEntreprise)
router.put('/task/:id', addTaskEntreprise)

router.delete('/task/:id', deleteTaskEntreprise)

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
