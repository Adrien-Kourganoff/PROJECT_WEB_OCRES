const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(cors());
app.use(bodyParser.json());

const indexRoute = require('./routes/index')

app.use('/index', indexRoute);

app.get('/', (req, res) => {
    res.send('coucou');
})

//on peut utiliser delete, get et post

//Connect to db
mongoose.connect(
    process.env.DB_CONNECTION, 
    () => console.log('Connecté à la base de données')

);

app.listen(3001);

module.exports = app;
