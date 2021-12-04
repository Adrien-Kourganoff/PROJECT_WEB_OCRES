var express = require('express');
var router = express.Router();
const AlertModel = require('../models/alert.model');
const moment = require('moment')


//GET meetings listing. //
router.get('/', async (req, res) => {  
 
  const alerts = await AlertModel.find()
	res.json(alerts)

})


// Update by ID

router.put("/update", async (req, res) => {
  
  const id = req.body.id;
  const title = req.body.title;
  const message = req.body.message;
  const date = req.body.alertDate; 

  try {

    const result = await AlertModel.updateOne({id},{
              title :title,
              message : message,
              alertDate : date,
    });
    console.log(result);
 
  } catch(error)
    {
      console.log("error");
    }
 
});


/*
// POST users listing. 
router.post('/add', async (req, res) => {  

  const Meetings = new MeetingModel ({lastName : "ilies ", name : "kalcha", email :"db@ece.fr", meeetingDate : "12/12/2021" })

  try {
    await Meetings.save();
    res.send("insered data");
  } catch(err) {
    console.log(err);
  }

})





// GET users listing. 
router.get('/', function (req, res) {  
  res.send('hello world');
 });


 */
module.exports = router;
