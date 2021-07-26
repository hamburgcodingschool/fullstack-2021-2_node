const express = require("express");
const blogData = require("./data/blogData.json");

const port = 3000;

const app = express();
app.set("view engine", "ejs");


app.get("/", function(req, res) {
    const pageData = {
        "heading": "This is the title of the page...",
        "blogData": blogData
    }

    res.render("index", pageData);
});

app.get("/blogpost", function(req, res) {

    let pos = req.query.pos;
    if (!pos || !blogData[pos]) {
        res.render("error");
        return;
    }

    const pageData = {
        "blogPost": blogData[pos]
    };

    res.render("blogpost", pageData);
});

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});