// server.js

import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = process.env.PORT || 5000;

const uri = "mongodb://localhost:27017/AdventureLand"; // Replace with your MongoDB connection URI

mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		family: 4,
	})
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error.message);
	});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
