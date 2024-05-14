import express from "express";
import mongoose from "mongoose";
const app = express();

const uri =
	"mongodb+srv://celsomartinscarvalho:M=k3-o9E2M@cluster1.bao32tb.mongodb.net/";

async function connect() {
	try {
		await mongoose.connect(uri);
		console.log("Conectado ao MongoDB");
	} catch (error) {
		console.log(error);
	}
}

connect();
app.listen(8000, () => console.log("Servidor iniciado na porta 8000"));
