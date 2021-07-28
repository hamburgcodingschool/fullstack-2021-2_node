const express = require("express");
const path = require("path");
const blogData = require("./data/blogData.json");
const homepageData = require("./data/homepageData.json");

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

console.log(__dirname);
console.log(path.join(__dirname, "public"));

app.set("view engine", "ejs");


app.get("/", function(req, res) {
    const pageData = {
        "heading": homepageData.heading,
        "image1": homepageData.image1,
        "image2": homepageData.image2,
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


// EXERCISE
// add 2 images to the homepage
// 1 from the internet
// 1 from the app's filesystem (public folder)

