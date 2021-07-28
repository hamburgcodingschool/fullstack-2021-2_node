const express = require("express");

const port = 3000;

const app = express();

// for encType: application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res) {
    
    let showWrongPassword = false;
    if (req.query.wrongpassword == "1") {
        showWrongPassword = true;
    }

    res.render("index.ejs", {
        "showError": showWrongPassword
    })
});

app.get("/exclusivepage", function(req, res) {
    // dummy
    res.send("use post to get here instead");
});

app.post("/exclusivepage", function(req, res) {

    const email = req.body.email;
    const password = req.body.password;
    
    if (email == "me@me.com" && password == "123456") {
        res.render("exclusive.ejs")
    } else {
        res.redirect("/?wrongpassword=1");
    }
    
});

app.listen(port, function() {
    console.log(`Server started. Listening on ${port}`);
});