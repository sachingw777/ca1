var express 	= require("express"),
    app 		= express(),
	bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Customer 	= require("./models/customers");


let url = process.env.DATABASEURL;
mongoose.connect(url,{ useUnifiedTopology: true, useNewUrlParser: true }); //create yelpcamp db inside mongodb
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// seedDB();


app.get("/", function(req, res) {
    res.render("index");
});

app.listen(3059, function(){
  console.log("APP.JS STARTED");
});