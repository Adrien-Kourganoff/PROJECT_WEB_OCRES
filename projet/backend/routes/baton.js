const router = require('express').Router();
let Baton = require('../models/baton.model');

router.route('/').get((req, res) => {
    Baton.find()
      .then(baton => res.json(baton))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const jour = req.body.jour;
    const happiness= req.body.happiness;
    const amt = req.body.amt;
    const newJour = new Baton({jour,happiness,amt});
  
    newJour.save()
      .then(() => res.json('Jour ajoutée'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').get((req, res) => {
    Baton.findById(req.params.id)
      .then(baton => res.json(baton))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/update/:id').post((req, res) => {
    Baton.findById(req.params.id)
      .then(baton => {
        baton.jour = req.body.jour;
        baton.happiness = req.body.happiness;
        baton.amt = req.body.amt;
  
        baton.save()
          .then(() => res.json('Graph updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router;