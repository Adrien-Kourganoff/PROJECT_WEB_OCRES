const router = require('express').Router();
let Astuce = require('../models/astuce.model');

router.route('/').get((req, res) => {
    Astuce.find()
      .then(astuces => res.json(astuces))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const phrase = req.body.phrase;
  const newAstuce = new Astuce({phrase});

  newAstuce.save()
    .then(() => res.json('Astuce ajoutée'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Astuce.findById(req.params.id)
      .then(astuce => res.json(astuce))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Astuce.findByIdAndDelete(req.params.id)
      .then(() => res.json('Astuce deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
