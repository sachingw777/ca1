var express 	= require("express"),
    app 		= express(),
	bodyParser  = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res) {
    res.render("index1");
});

app.listen(3033, function(){
  console.log("APP.JS STARTED");
});