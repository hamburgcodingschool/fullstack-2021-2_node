const express = require("express");

const app = express();
const port = 3000;

app.get("/", function(req, res) {
    console.log("Some random user just requested the homepage...");
    res.send("Hello World!");
});

app.get("/about", function(req, res) {
    res.send("Welcome to the about page!");
});

app.get("/test1", function(req, res) {
    console.log("test 1");
    res.send("Always send a response");

    // this will produce an error in the console since the response was already sent!
    res.send("this will not work");
});

app.listen(port, function() {
    console.log(`App is running on port ${port}`);
});