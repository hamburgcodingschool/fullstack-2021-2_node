const express = require("express");

const app = express();
const port = 3000;

app.get("/", function(req, res) {
    res.send("<h1>This is great</h1><h2>Yay!!!!!</h2>");
});

app.get("/restapi", function(req, res) {
    // res.send(`
    //     {
    //         "response": "ok",
    //         "data": "some info"
    //     }
    // `);

    const someObject = {
        response: "ok",
        data: 'some info'
    }

    res.json(someObject);
});

let counter = 0;
app.get("/counter", function(req, res) {
    counter ++;
    res.send(`${counter} times`);
});

app.listen(port, function() {
    console.log(`The server is awesome and it's runnint on port${port}`);
});