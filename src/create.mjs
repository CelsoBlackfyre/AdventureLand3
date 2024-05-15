import { MongoClient } from "mongodb";

const uri =
	"mongodb+srv://celsomartinscarvalho:M=k3-o9E2M@cluster1.bao32tb.mongodb.net/AdventureLand";
const client = new MongoClient(uri);
async function run() {
	try {
		const database = client.db("AdventureLand");
		const teste = database.collection("teste");
		const doc = {
			nome: "Clark Kent",
			email: "clark@example.com",
		};
		const result = await teste.insertOne(doc);

		console.log(`Uma pessoa foi inserida com o ID de : ${result.insertedId}`);
	} finally {
		await client.close();
	}
}
run().catch(console.dir);
