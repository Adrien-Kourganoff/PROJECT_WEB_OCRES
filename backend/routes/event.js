const Task = require("../Models/Task.js");
const Entreprise = require("../Models/Entreprise.js");
const { body, validationResult } = require("express-validator");

var express = require("express");
var moment = require("moment");
var router = express.Router();

router.post(
  "/",
  [
    body("event").exists().isString(),
    body("dateStart").isISO8601(),
    body("dateEnd").isISO8601(),
  ],

  async function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    if (moment(req.body.dateStart).isAfter(moment(req.body.dateEnd))) {
      return res.status(400).json({ error: "invalideDate" });
    }
    console.log("ip body" + req.body._id);
    const task = new Task({
      content: req.body.event,
      start: req.body.dateStart,
      end: req.body.dateEnd,
      allDay: false, //on a aussi req.body.id qui correspond à l'id de l'entreprise sur la quelle nous sommes!
    });
    await task.save();
    /*const ryu = await Entreprise.findOne({ _id: req.body._id });
    console.log(ryu);
    console.log(Entreprise.find({}).benef[1]);*/
    res.json(task);
    /*Entreprise.findOneAndUpdate(
      { _id: req.body._id },
      {
        $push: { myEventsList: task },
        function(error, success) {
          if (error) {
            console.log("nooon" + error);
          } else {
            console.log(success);
          }
        },
      }
    );
    console.log("entree" + Entreprise.find({ _id: req.body._id }));
    res.json(Entreprise);*/
  }
);

router.get("/", async function(req,res){
    const tasks= await Task.find({});
    res.json(tasks);

});
router.get("/", async function (req, res) {
  const entreprise = await Entreprise.find({});
  res.json(entreprise);
});

router.put("/", async function (req, res) {
  ////
});
// get recuperation
// delete suppression
// put modification
// post ajout 
// methode http
module.exports = router;
