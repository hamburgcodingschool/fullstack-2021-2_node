const express = require("express");
// const path = require("path");

const app = express();
const port = 3000;

// TEMPLATE ENGINES FOR NODE
// moustache, handlebars, pug, ejs

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "templates"));

app.get("/", function(req, res) {

    const secretKey = "sdjfhsiufhsiufhsiudfh";

    const values = {
        name: "Helder",
        isTired: true,
        fruit: [
            "Orange",
            "Apple",
            "Banana",
            "Pineapple",
            "Grapefruit"
        ]
    }

    res.render("index", values);
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(port, function() {
    console.log(`Running on ${port}`);
});

// EXERCISE
// 1 - add more values to the template and show them in the page
// 2 - add an about page with its own ejs file