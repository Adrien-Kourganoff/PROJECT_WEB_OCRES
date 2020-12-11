const mongoose = require('mongoose');

const taskchema = mongoose.Schema(
    {
        title: String,
        start: Date,
        end: Date,
        allDay : Boolean,
    }
)

const Task = mongoose.model("task",taskchema);

module.exports=Task;

