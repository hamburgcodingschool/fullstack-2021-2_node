const connection = require("./connection");

function getAllCities(callback) {
    const sql = `SELECT * FROM city`;
    connection.query(sql, function(err, result) {
        callback(result);
    });
}

function getCityByCountryCode(countryCode, callback) {
    const sql = `SELECT * FROM city WHERE countryCode = ?`;
    const params = [ countryCode ];
    connection.query(sql, params, function(err, result) {
        callback(result);
    });
}

function getCityByPopulation(minPopulation, callback) {
    const sql = `SELECT * FROM city WHERE Population >= ?`;
    const params = [ minPopulation ];
    connection.query(sql, params, function(err, result) {
        callback(result);
    });   
}

module.exports = {
    getAllCities,
    getCityByCountryCode,
    getCityByPopulation
}