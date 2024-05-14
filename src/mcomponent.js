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

const userSchema = new mongoose.Schema({
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

app.post("/createUser", async (req, res) => {
	try {
		const { nome, email, senha } = req.body;
		const userData = await UserModel.create({ nome, email, senha });
		res.send(userData);
	} catch (error) {
		console.log(error);
	}
});

app.put("/updateUser/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { nome, email, senha } = req.body;
		const userData = await UserModel.findByIdAndUpdate(id, {
			nome,
			email,
			senha,
		});
		res.send(userData);
	} catch (error) {
		console.log(error);
	}
});

// eslint-disable-next-line no-undef
