var express = require('express');
var router = express.Router();
const MeetingModel = require('../models/meeting.model');
const moment = require('moment')


/* GET meetings listing. */
router.get('/getMeetings', async (req, res) => {  

  const Meetings = await MeetingModel.find()
	res.send(Meetings)
})

/* GET meetings listing by date */
router.get('/getMeetingsByDate', async (req, res) => {  

  const dateInServer = new Date(req.query.date);
  console.log(dateInServer);
  


  try {
   const Meetings = await MeetingModel.find( {meetingDate : {
                                               $gte : new Date(),
                                               $lt : new Date()
                                               }
                                              })
    res.send(Meetings)

  }catch(err)
  {
    console.log(err);
  }
 
})












/* POST users listing. */
router.post('/add', async (req, res) => {  

  const Meetings = new MeetingModel ({lastName : "ilies ", name : "kalcha", email :"db@ece.fr", meeetingDate : "12/12/2021" })

  try {
    await Meetings.save();
    res.send("insered data");
  } catch(err) {
    console.log(err);
  }

})





/* GET users listing. */
router.get('/', function (req, res) {  
  res.send('hello world');
 });

module.exports = router;
