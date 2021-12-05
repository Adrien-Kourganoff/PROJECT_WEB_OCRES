const mongoose = require('mongoose')

const alertSchema = new mongoose.Schema( 
    {
         title : { type :String, required :true},
        message : { type :String, required :true},
        alertDate : { type : Date, required :true, default: Date.now},
    }, 
)
const Alert = mongoose.model("alerts", alertSchema);

module.exports =  Alert;

