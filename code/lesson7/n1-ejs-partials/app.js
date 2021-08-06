const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
    res.render("index.ejs");
});

app.get("/about", function(req, res) {
    res.render("about.ejs");
});

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});