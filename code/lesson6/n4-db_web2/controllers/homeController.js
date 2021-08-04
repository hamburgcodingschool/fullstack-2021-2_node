const mysql = require("mysql2");
const cityDB = require("../db/city");
const connection = require("../db/connection");


function homepage(req, res) {
    
    const countryCode = req.query.cc;
    cityDB.getCityByCountryCode(countryCode, function(result) {
        console.log(result);
        res.render("index.ejs", {result: result});
    });
}

function byPopulation(req, res) {
    const minPop = req.query.minPop || 0;

    cityDB.getCityByPopulation(minPop, function(result) {
        console.log(result);
        res.render("index.ejs", {result: result});
    });
}

module.exports = { homepage, byPopulation }