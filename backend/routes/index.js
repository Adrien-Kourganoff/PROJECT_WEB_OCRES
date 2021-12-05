const mongoose = require('mongoose');
var express = require("express");
var router = express.Router();
const Post = require('../models/Posts')

/* GET all the posts*/
router.get("/", async function (req, res, next) {
  try {
    const posts = await Post.find();
    res.json(posts);

  } catch (err) {
    res.json({ message: err });
  }
});

//Add a post
router.post('/', async function (req, res, next) {
  const post = new Post({
    tempHaute: req.body.tempHaute,
    lieuTempHaute: req.body.lieuTempHaute,
    anneeTempHaute: req.body.anneeTempHaute,
    tempBasse: req.body.tempBasse,
    lieuTempBasse: req.body.lieuTempBasse,
    anneeTempBasse: req.body.anneeTempBasse,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//Specific posts
router.get('/:postId', async function (req, res, next) {

  try {
    const post = await Post.findById(req.params.postId)
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

var deleteAPIDATA = () => {
  axios
      .delete("http://localhost:3001/index/${id}")
      .catch(console.error);
}
//Delete Post
/*URL = "http://localhost:3001/index";

axios.delete(URL, {
  headers: {
    Authorization: authorizationToken
  },
  data: {
    username: "dbUser", 
    password:"dbUser"
  },
}); */


router.delete('/:postId', async function (req, res, next) {

  try {
    const removedPost = await Post.remove({ _id: req.params.postId })
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }

});


//Update Post
router.patch('/:postId', async function (req, res, next) {
  try {
    const updatedPost = await Post.updateOne(
    { _id: req.params.postId }, 
    { $set: {tempHaute: req.body.tempHaute } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }

});

//delete api
//URL = "http://localhost:3001/index";

/*axios.delete(URL, {
  headers: {
    Authorization: authorizationToken
  },
  data: {
    username: "dbUser", 
    password:"dbUser"
  },
});*/


module.exports = router;


