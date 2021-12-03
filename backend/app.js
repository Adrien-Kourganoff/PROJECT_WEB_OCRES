const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://Admin:Admin@cluster0.mitte.mongodb.net/ocres-web', {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("connection to db");
});

//Import Routes
const alerts = require('./routes/alerts');
app.use('/alerts', alerts);



app.listen(1337, () => {
    console.log('server started at 1337')
})