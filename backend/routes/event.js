const Task= require("../Models/Task.js");
const { body, validationResult } = require('express-validator');

var express = require("express");
var moment = require("moment");
var router = express.Router();

router.post("/",[
    body('event').exists().isString(),  
    body('dateStart').isISO8601(),
    body('dateEnd').isISO8601(),
], 

async function(req, res, next) {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  if (moment(req.body.dateStart).isAfter(moment(req.body.dateEnd))) {
    return res.status(400).json({ error: "invalideDate" });
  }
  
  const task = new Task ({
    content:req.body.event,
    start: req.body.dateStart,
    end: req.body.dateEnd,
    });
  await task.save();
  
  res.json(task);
  
});


router.get("/", async function(req,res){
    const tasks= await Task.find({});
    res.json(tasks);

});


module.exports = router;