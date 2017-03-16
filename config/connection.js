var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "cent430Rim$",
	database: "burgers_db"
});
}

connection.connect(function(err) {
	if(err) {
		console.error("Error connecting:  " + err.stack);
		return;
	}

	console.log("connected as id " + connection.threadId);
});

//export connection for ORM to use
module.exports = connection;