//Dependencies
var db = require("../models");

//Routes
module.exports = function(app) {

app.get("/", function(req,res) {
	//show burgers
	db.Burger.findAll().then(function(results) {
		var hbsObject = {
			burgers: results
		}
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

//new burger
app.post("/", function(req, res) {

	db.Burger.create({
		burger_name: req.body.name,
		devoured: req.body.ate
	}).then(function() {
	  	res.redirect("/");
	  });
});

//update a burger to eaten or not
app.post("/:id", function(req,res) {

	db.Burger.update({
		devoured: req.body.ate
	}, {
		where: { id: req.params.id }}).then(function() {
			res.redirect("/");
		});
});

}