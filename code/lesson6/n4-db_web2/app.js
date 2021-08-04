const express = require("express");
const homeController = require("./controllers/homeController");

const app = express();
const port = 3000;

app.get("/", homeController.homepage);
app.get("/bypopulation", homeController.byPopulation);

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});


// EXERCISE:
// Create a new Endpoint `/bypopulation`
// It should receive a number as a queryParameter `?minPop=100000`
// It should only display the cities that have at least that many people