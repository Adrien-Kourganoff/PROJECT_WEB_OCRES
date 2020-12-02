const mongoose = require('mongoose');

const taskchema = mongoose.Schema(
    {
        content: String,
        start: Date,
        end: Date,
    }
)

const Task = mongoose.model("task",taskchema);

module.exports=Task;

