const { default: axios } = require('axios');
var express = require('express');
var router = express.Router();

const APIKey = "GgP4SgF2zg7NkmgVPJ2WXnJtM3BRrPD6";
const method = "smugmug.albums.getInfo";
const URLAPI = "https://api.smugmug.com/services/api/json/1.3.0/?";

//Static for now but will be connected to a mongo DB after
router.get('/', async function(req, res, next) {
    
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    const allData = [];

    const response = [
        {"id":266617047 ,"key":"ZfpbhK"},
        {"id":267773862 ,"key":"bjFWDN"},
        {"id":268560353 ,"key":"hZKXrr"},
        {"id":269555809 ,"key":"wD3hTP"},
        {"id":271346508 ,"key":"FkTXRP"},
        {"id":271758363 ,"key":"359C5c"},
        {"id":271777876 ,"key":"qZVqJ4"},
        {"id":272854385 ,"key":"LVvHcS"},
        {"id":274572423 ,"key":"xB48Lt"},
        {"id":274573287 ,"key":"dT2RKQ"},
        {"id":275336577 ,"key":"hcsRsS"},
        {"id":275885220 ,"key":"TvkShv"}
    ];

    for (let i = 0; i < response.length; i++) {
        await axios.get(URLAPI+'method='+method+'&APIKey='+APIKey+'&AlbumID='+response[i].id+'&AlbumKey='+response[i].key)
            .then(all => {
                allData.push(all.data)
            });
    }

    res.status(200).send(allData);
});



module.exports = router;