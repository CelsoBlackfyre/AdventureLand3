const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema({
	content: {
		nome: String,
		idade: Number,
		email: String,
	},
});
module.exports = mongoose.model("DataModel", DataSchema);
