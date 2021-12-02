var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var galerieRouter = require("./routes/galerie");
var weatherRouter = require("./routes/weather");
var eventsRouter = require("./routes/events");
var albumsRouter = require("./routes/albums");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/galerie", galerieRouter);
app.use("/weather", weatherRouter);
app.use("/events", eventsRouter);
app.use("/albums", albumsRouter);

// ----------------------------- MongoDB ----------------------------------
const { MongoClient } = require("mongodb");
const url = "mongodb+srv://admin:admin@cluster0.2ztwl.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function run() {
    try {
        console.log("oui");
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db("test");
         // Use the collection "people"
         const col = db.collection("people");
         // Construct a document                                                                                                                                                              
         let personDocument = {
             "name": { "first": "Thomas", "last": "Retout" },
             "birth": new Date(2000, 2, 12), // June 23, 1912                                                                                                                                 
             "death": new Date(2086, 10, 7),  // June 7, 1954                                                                                                                                  
             "contribs": [ "Turing machine", "IoT", "Javascript" ],
             "views": 120
         }
         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(personDocument);
         // Find one document
         const myFDoc = await col.findOne();
         //Find and update a doc
         //const myDoc = await col.findOneAndUpdate({views: 120},{$set: {"views" : "357"}});
         // Print to the console
         console.log(myFDoc);
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);
// ------------------------------------------------------------------------

module.exports = app;
