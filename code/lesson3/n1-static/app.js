const express = require("express");
const path = require("path");

const port = 3000;
const app = express();

// const absolutePath = path.join(__dirname, "public");
// const static = express.static(absolutePath);
// app.use(static);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
    res.send("Try the path /styles.css you will like it...");
});

app.listen(port, function() {
    console.log(`listening on ${port}`);
});