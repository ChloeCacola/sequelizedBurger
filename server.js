var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes =============================================================

// require("./routes/html-routes.js")(app);
require("./routes/burger-routes.js")(app);

//sync models; run express app
db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log("Listening on PORT " + PORT);
	});
});