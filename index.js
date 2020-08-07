const express = require('express')
const bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 8888;
console.log(process.env.PORT);
app.use(bodyParser.json({extended: false}))
app.listen(port, () => {
    console.log("Server running on port " + port);
});
app.get("/okta", (req, res, next) => {
    res.json({ "verification" : req.headers["x-okta-verification-challenge"] });
});

app.get("/", (req, res, next) => {
    res.json({ "hello" : "world"});
});

app.post("/okta", (req, res, next) => {
    console.log(req.body.data.events);
    res.json({ "hello" : req.body.data.events});
});