const express = require("express");

const app = express();

const port = 3000;

app.get("/", function(req, res) {
    console.log(req.query.type);

    const pageData = {
        type: req.query.type
    };

    res.render("index.ejs", pageData);
});


app.listen(port, function() {
    console.log(`Listening on ${port}`);
});