const express = require("express");

const port = 3000;

const app = express();

app.get("/", function(req, res) {
    res.render("index.ejs");
});

app.get("/insert", function(req, res) {
    // EXERCISE

    // 1 - Read the query params coming from `req` and log them in the Node console
    
    // 2 - create a new ejs template for the `insert` route, show the values sent in that page template

    res.send("Thanks!");
});

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});