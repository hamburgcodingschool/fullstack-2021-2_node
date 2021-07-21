const express = require("express");

const app = express();
const port = 3000;

const users = [
    "Joe",
    "Mary",
    "Gwen",
    "Hugh"
]

app.get("/", function(req, res) {

    console.log(req.query);

    let username = "undefined user";

    const pos = req.query.pos;
    if (pos) {
        username = users[pos];
    }

    res.send(`
        <h1>The title of the page</h1>
        <h2>Hello ${username}</h2>
        <img src="" alt="a nice image...">
    `);
});

app.listen(port, function() {
    console.log(`Running on ${port}`);
});