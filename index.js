var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/Style'));
app.use(express.static(__dirname + '/Image'));

//Get landing page
app.get("/" , function(req, res) {
        res.render("IndexV2");
});
app.get("/Soumission" , function(req, res) {
        res.render("Soumission");
});
app.get("/NosRealisation" , function(req, res) {
        res.render("NosRealisation");
});
//Start the server
app.listen(process.env.PORT, process.env.IP);
