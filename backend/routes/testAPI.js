var express = require("express");
var router = express.Router();

router.get("/testAPI", function (req, res, next) {
    res.send("API is working properly");
});

module.exports = router;