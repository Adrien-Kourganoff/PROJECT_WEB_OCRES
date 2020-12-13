const Entreprise = require("../Models/Entreprise.js");
const express = require("express");
const router = express.Router();
const addEventEntreprise = require('../services/entreprise/addEventEntreprise');
const addComEntreprise = require('../services/entreprise/addComEntreprise');
const deleteTaskEntreprise = require('../services/entreprise/deleteTaskEntreprise');
const addTaskEntreprise = require('../services/entreprise/addTaskEntreprise');

const addGainEntreprise = require('../services/entreprise/addGainEntreprise');
const addBenefEntreprise = require('../services/entreprise/addBenefEntreprise');
const addDepEntreprise = require('../services/entreprise/addDepEntreprise');

router.put('/event/:id', addEventEntreprise)
router.put('/commentaire/:id', addComEntreprise)
router.put('/task/add/:id', addTaskEntreprise)
router.put('/gain/:id/:typeg', addGainEntreprise)
router.put('/dep/:id/:typedep', addDepEntreprise)
router.put('/benef/:id/:mois', addBenefEntreprise)


router.delete('/task/delete/:id/:key/:text', deleteTaskEntreprise)

router.get('/:id', async (req, res) => {
  try {
    const entreprise = await Entreprise.findOne({ _id: req.params.id });
    
    res.status(200).json({ entreprise })
  } catch (err) {
    res.status(500).json({ error: err })
  }
})


module.exports = router;
