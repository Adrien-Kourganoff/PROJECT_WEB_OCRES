const router = require('express').Router();
let Son = require('../models/son.model');

router.route('/').get((req, res) => {
    Son.find()
      .then(sons => res.json(sons))
      .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const url= req.body.url;
  const newSon = new Son({url});
  newSon.save()
    .then(() => res.json('Son ajouté'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Son.findById(req.params.id)
      .then(son => res.json(son))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Son.findByIdAndDelete(req.params.id)
      .then(() => res.json('Son deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Son.findById(req.params.id)
      .then(Son => {
        Son.url = req.body.url;
  
        Son.save()
          .then(() => res.json('Son updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;