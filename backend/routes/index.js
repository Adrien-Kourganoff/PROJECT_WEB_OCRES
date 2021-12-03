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
    title: req.body.title,
    description: req.body.description
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

//Delete Post
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
    { $set: {title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }

});

module.exports = router;


