const Task= require("../Models/Task.js");

var express = require("express");
var router = express.Router();
/* GET home page. */
router.post("/", async function(req, res, next) {
  console.log(req.body);
  const task = new Task ({
    content:"Event",
    start: new Date(),
    end: new Date(),
    });
  await task.save();
  const task1= await Task.findOne({content: "Event" });
  console.log(task1);
  res.send("This is my homepage");
  
});


module.exports = router;
