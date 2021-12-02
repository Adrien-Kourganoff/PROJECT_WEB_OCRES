const mongoose = require('mongoose')

const meetingSchema = new mongoose.Schema( 
    {
        lastName : { type :String, required :true},
        name : { type :String, required :true},
        email : { type :String, required :true},
        meetingDate : { type : Date, required :true, default: Date.now},
    }, 
)
const Meeting = mongoose.model("meeting-data", meetingSchema);

module.exports =  Meeting;

