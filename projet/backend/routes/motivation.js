const router = require('express').Router();
let Motivation = require('../models/quote.model');

router.route('/').get((req, res) => {
    Motivation.find()
      .then(motivation => res.json(motivation))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const quote = req.body.quote;
  const auteur = req.body.auteur;
  
  const newMotivation = new Motivation({quote,auteur});

  newMotivation.save()
    .then(() => res.json('Motivation quote ajoutée'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Motivation.findById(req.params.id)
      .then(astuce => res.json(astuce))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Motivation.findByIdAndDelete(req.params.id)
      .then(() => res.json('Motivation quote deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
