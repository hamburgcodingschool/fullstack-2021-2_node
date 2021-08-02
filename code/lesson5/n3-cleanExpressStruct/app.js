const express = require("express");
const routeController = require("./controllers/routeController");

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.get("/", routeController.homepage);

app.get("/gallery", routeController.gallery);

app.get("/about", routeController.about);

app.get("/contacts", routeController.contacts);
app.post("/contacts", routeController.contacts);

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});