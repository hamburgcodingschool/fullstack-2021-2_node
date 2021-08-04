const mysql = require("mysql2");


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "world"
});

connection.query("SELECT * FROM city WHERE countrycode = 'PRT'", function(err, result) {
    // console.log("ERROR:", err);
    // console.log("Result:", result);

    for (let i = 0; i < result.length; i++) {
        console.log(result[i].Name);
    }
});

console.log("Hello world!");