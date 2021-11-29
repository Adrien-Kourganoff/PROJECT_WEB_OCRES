const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

//Static for now but will be connected to a mongo DB after
router.get('/', async function(req, res, next) {
    
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    const response = [{"event":"Pot des caves","date":"2/12","position":{ "name":"Duplex", "coord":{"lat":48.873658, "lng": 2.292500} },"couvreurs":["Emma"," Tara"]},
        {"event":"JOB","date":"6/12","position":{ "name":"Palais royal", "coord":{"lat":48.865045, "lng": 2.337404} },"couvreurs":["Eloi"," Thomas"]},
        {"event":"Afterwork JEECE","date":"8/12","position":{ "name":"Square St Eloi", "coord":{"lat":48.844737, "lng": 2.387503} },"couvreurs":["Nina"," Mathieux"]}];
    
    res.status(200).send(response);
});

module.exports = router;