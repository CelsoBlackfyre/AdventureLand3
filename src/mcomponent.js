import express from "express";
import mongoose from "mongoose";
const app = express();

const uri =
	"mongodb+srv://celsomartinscarvalho:M=k3-o9E2M@cluster1.bao32tb.mongodb.net/AdventureLand";

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

const userScshema = new mongoose.Schema({
	nome: String,
	email: String,
	senha: String,
});

const UserModel = mongoose.model("Usuarios", userSchema);

app.get("/getUsers", async (req, res) => {
	try {
		const userData = await UserModel.find();
		res.send(userData);
	} catch (error) {
		console.log(error);
	}
});
