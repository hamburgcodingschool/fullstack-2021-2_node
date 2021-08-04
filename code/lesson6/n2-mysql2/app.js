const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "world"
});

const sql = "SELECT * FROM city WHERE countryCode = 'PRT' AND name LIKE 'p%'";
connection.query(sql, function(err, result) {

    for (let i = 0; i < result.length; i++) {
        console.log(result[i].Name);
    }

});