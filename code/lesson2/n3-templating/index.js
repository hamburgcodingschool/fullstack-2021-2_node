const express = require("express");
// const path = require("path");

const app = express();
const port = 3000;

// TEMPLATE ENGINES FOR NODE
// moustache, handlebars, pug, ejs

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "templates"));

app.get("/", function(req, res) {

    const values = {
        name: "Helder"
    }

    res.render("index", values);
});

app.listen(port, function() {
    console.log(`Running on ${port}`);
});