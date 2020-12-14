const router = require('express').Router();
let Music = require('../models/music.model');

router.route('/').get((req, res) => {
    Music.find()
      .then(musics => res.json(musics))
      .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  const titre = req.body.titre;
  const author = req.body.author;
  const duration = req.body.duration;
  const date = req.body.date;
  const audio = req.body.audio;
  const img = req.body.img;

  const newMusic = new Music({titre,author,audio,duration,date,img});

  newMusic.save()
    .then(() => res.json('Musique ajoutée'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    Music.findById(req.params.id)
      .then(music => res.json(music))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Music.findByIdAndDelete(req.params.id)
      .then(() => res.json('Musique deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Music.findById(req.params.id)
      .then(Music => {
        Music.titre = req.body.titre;
        Music.author= req.body.author;
        Music.duration= req.body.duration;
        Music.date = req.body.date;
        Music.audio= req.body.audio;
        Music.img= req.body.img;
  
        Music.save()
          .then(() => res.json('Musique updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
