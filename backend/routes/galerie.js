const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

const APIKey = "GgP4SgF2zg7NkmgVPJ2WXnJtM3BRrPD6";
const AlbumID = "275336577";
const AlbumKey = "hcsRsS";
const method = "smugmug.images.get";
const URLAPI = "https://api.smugmug.com/services/api/json/1.3.0/?";

const method2 = "smugmug.images.getURLs";

var URLs = [];

/* GET all photos IDs. */
router.get('/', async function(req, res, next) {

    var all;
    await axios.get(URLAPI+"method="+method+"&APIKey="+APIKey+"&AlbumID="+AlbumID+"&AlbumKey="+AlbumKey)
        .then( allPhoto => all = allPhoto )
        .catch(err => res.send(err));

    await getURLPhoto(JSON.parse(JSON.stringify(all.data.Album.Images)));

    //console.log(URLs);

    res.status(200).send(URLs);
});

/* GET URL photo */
async function getURLPhoto(IDKey){
    
    var lenght = Object.keys(IDKey).length;

    if(lenght > 20)
        lenght = 20;

    /* Get all url for the 20 first pictures in the seveur */
    for (let i = 0; i < lenght; i++) {
        await axios.get(URLAPI+"method="+method2+"&APIKey="+APIKey+"&ImageID="+IDKey[i].id+"&ImageKey="+IDKey[i].Key)
        .then( allData => URLs.push(allData.data.Image.URL)  )
    }

    /*
    for (let index = 0; index < URLs.length; index++) {
        console.log(URLs[index]);
    }*/

    return URLs;
}

module.exports = router;
