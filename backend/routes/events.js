const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

// ----------------------------- MongoDB ----------------------------------
const { MongoClient } = require("mongodb");
const url = "mongodb+srv://admin:admin@cluster0.2ztwl.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
// ------------------------------------------------------------------------

//Static for now but will be connected to a mongo DB after
router.get('/', async function(req, res, next) {
    
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("jbtv");
    // Use the collection "people"
    const col = db.collection("eventList");
    // Find all events later than today
    const response = await (await col.find({"date": {"$gte": new Date()} }).toArray());
    //Get only the date as YYYY-MM-DD
    response.forEach(e => e.date = e.date.toLocaleDateString("fr-FR",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    //Close connection
    await client.close();

    res.status(200).send(response);
});

//Static for now but will be connected to a mongo DB after
router.get('/all', async function(req, res, next) {
    
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("jbtv");
    // Use the collection "people"
    const col = db.collection("eventList");
    // Find all events later than today
    const response = await col.find().toArray();
    //Get only the date as YYYY-MM-DD
    response.forEach(e => e.date = e.date.toLocaleDateString("fr-FR",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
    //Close connection
    await client.close();

    res.status(200).send(response);
});

/* UPDATE user. 
router.post('/:id', async function(req, res) {

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    console.log(req.params.id);

    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db("jbtv");
    const col = db.collection("eventList");
    const result = await col.updateOne({_id: req.params.id}, {$set: {"event" : "yo"}});
    console.log(result);

    // Return message
    res.json({
      message: `Just updated ${req.params.id} with yo`
  });
});*/
  

/*
async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db("jbtv");
        // Use the collection "people"
        const col = db.collection("eventList");
        // Find one document
        return await col.find().toArray();
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);
*/

module.exports = router;