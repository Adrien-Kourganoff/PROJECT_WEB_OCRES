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

  const dateInServer = req.query.date;

  //console.log(dateInServer);
  newDate=new Date(dateInServer);
  newDateSTR=newDate.toISOString();
  console.log(newDateSTR);


  newNextDate=newDate;
  newNextDate.setHours(24,0,0,0);
  newNextDateSTR=newNextDate.toISOString();
  console.log(newNextDateSTR);

  try {
   const Meetings = await MeetingModel.find( {meetingDate : {
                                               $gte : new Date(newDateSTR),
                                               $lt :  new Date(newNextDateSTR)
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
