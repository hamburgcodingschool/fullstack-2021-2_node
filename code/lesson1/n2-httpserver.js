const http = require("http");

http.createServer(function(req, res) {

    console.log(req);

    res.write("Hello world!");

    res.end();
}).listen(3000);