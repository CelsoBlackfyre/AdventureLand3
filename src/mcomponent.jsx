import React from "react";
import mongoose from "mongoose";

class MongoComponent extends React.Component {
	componentDidMount() {
		mongoose.connect(
			"mongodb://localhost:27017/AdventureLand",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			},
			(err) => {
				if (err) {
					console.error(err);
				} else {
					console.log("Conectado ao MongoDB");
				}
			}
		);
	}
}

export default MongoComponent;
