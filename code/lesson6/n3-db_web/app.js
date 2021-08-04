const express = require("express");
const homeController = require("./controllers/homeController");

const app = express();
const port = 3000;

app.get("/", homeController.homepage);

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});