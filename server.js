var express = require('express');
var app = express();
app.use(express.static("public")); // myApp will be the same folder name.
app.get('/', function (req, res,next) {
    res.sendFile(__dirname + '/index.html');
});
app.listen(8080, 'localhost');
console.log("MyProject Server is Listening on port 8080");