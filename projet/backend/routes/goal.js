const router = require('express').Router();
let Goal = require('../models/goal.model');

router.route('/').get((req, res) => {
    Goal.find()
      .then(goal => res.json(goal))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const objectif = req.body.objectif;
  const newGoal = new Goal({objectif});

  newGoal.save()
    .then(() => res.json('Objectif ajoutée'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Goal.findById(req.params.id)
      .then(goal => res.json(goal))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Goal.findByIdAndDelete(req.params.id)
      .then(() => res.json('Objectif supprimé.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
