const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://jade:dbJade@cluster0.ymgpm.mongodb.net/Projet?retryWrites=true&w=majority";
// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(uri, { useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("Projet");
    app.listen(3000, function () {
      console.log("listening on 3000");
    });

    app.get("/entreprises", (req, res) => {
      db.collection("Entreprise").find({}).toArray(function(err,result){
        res.status(200).send(result)
      })
    });
    app.get("/entreprise/:id", (req, res) => {//variable
      db.collection("Entreprise").find({_id:parseInt(req.params.id)}).toArray(function(err,result){
        res.status(200).send(result[0])
      })
    });

    app.post("/quotes", (req, res) => {
      console.log(req.body);
    });
  })
  .catch((error) => console.error(error));
