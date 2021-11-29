var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

router.get("/pokemon", async (req, res) => {
    console.log("/pokemon_first_generation endpoint called");

    const url = `https://pokeapi.co/api/v2/pokemon?limit=151/`;
    const options = {
        "method": "GET",
    };

    const response = await fetch(url, options)
        .then(res => res.json())
        .catch(err => {
            console.error({
                "message": "there is an issue to get /pokemon_first_generation",
                error: e,
            });
        });
    console.log("response: ", response);
    res.json(response);
});

router.get('/pokemonStat/:pokemonName', async (req, res) => {
    console.log("/pokemonStat endpoint called");
    const url = `https://pokeapi.co/api/v2/pokemon/${req.params.pokemonName}`;
    const options = {
        "method": "GET",
    };

    const response = await fetch(url, options)
        .then(res => res.json())
        .catch(err => {
            console.error({
                "message": "there is an issue to get /pokemonStat",
                error: e,
            });
        });
    console.log("response: ", response);
    res.json(response);
});

router.get('/pokemonNameFr/:pokemonId', async (req, res) => {
    console.log("/pokemonColor endpoint called");
    const url = `https://pokeapi.co/api/v2/pokemon-species/${req.params.pokemonId}`;
    const options = {
        "method": "GET",
    };

    const response = await fetch(url, options)
        .then(res => res.json())
        .catch(err => {
            console.error({
                "message": "there is an issue to get /pokemonColor",
                error: e,
            });
        });
    console.log("response: ", response);
    res.json(response);
});

module.exports = router;