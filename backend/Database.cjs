var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
const PORT = process.env.PORT || 5000;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "public")));

// Connect to MongoDB
mongodb.MongoClient.connect("mongodb://localhost:27017/AdventureLand")
	.then(function (db) {
		console.log("Connected to MongoDB");

		// Define routes after MongoDB connection is established
		app.post("/post-feedback", function (req, res) {
			delete req.body._id; // for safety reasons
			db.collection("feedbacks")
				.insertOne(req.body)
				.then(function () {
					res.send("Data received:\n" + JSON.stringify(req.body));
				})
				.catch(function (error) {
					res.status(500).send("Error: " + error.message);
				});
		});

		app.get("/view-feedbacks", function (req, res) {
			db.collection("feedbacks")
				.find({})
				.toArray()
				.then(function (feedbacks) {
					res.status(200).json(feedbacks);
				})
				.catch(function (error) {
					res.status(500).send("Error: " + error.message);
				});
		});

		// Start the server after MongoDB connection is established
		app.listen(PORT, function () {
			console.log("Server listening on port " + PORT);
		});
	})
	.catch(function (error) {
		console.log("Error connecting to MongoDB: " + error.message);
	});
