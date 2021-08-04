const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "world"
});

function homepage(req, res) {
    
    const countryCode = req.query.cc;
    
    // THIS IS VERY DANGEROUS
    // SQL Injection
    // connection.query(`SELECT * FROM city WHERE countryCode = '${countryCode}'`, function(err, result) {


    // ALWAYS USE Prepared Statements WITH ?
    // WHEN ADDING INFO YOU DO NOT CONTROL
    const sql = `SELECT * FROM city WHERE countryCode = ?`;
    const sqlParams = [ countryCode ];
    connection.query(sql, sqlParams, function(err, result) {

        if (err) {
            res.send("THERE WAS AN ERROR.... WHOOPS!");
        } else {
            res.render("index.ejs", {result: result});
        }
    });
}

module.exports = { homepage }