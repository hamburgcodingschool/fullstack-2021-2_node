const mysql = require("mysql2");
const { getAllCities, getCityByCountryCode } = require("../db/city");
const connection = require("../db/connection");


function homepage(req, res) {
    
    const countryCode = req.query.cc;
    getCityByCountryCode(countryCode, function(result) {
        console.log(result);
        res.render("index.ejs", {result: result});
    });
}

module.exports = { homepage }