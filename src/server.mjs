//importando express
import express from "express";
//determinando a porta
const PORT = process.env.PORT || 5000;
//criando o app do express
const app = express();
//fazendo o server escutar a porta
app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
//determinado o banco de dados
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/AdventureLand", {});

const Item = mongoose.model("Item", {
	name: String,
	description: String,
});

app.get("/api/items", async (req, res) => {
	try {
		const items = await Item.find();
		res.send(items);
	} catch (error) {
		console.error(error);
		res.status(500).send("Erro no servidor");
	}
});
