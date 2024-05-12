import React from "react";
import axios from "axios";

function Write() {
	let [inputValue, setInputValue] = React.useState("");
	const salvarDados = async () => {
		try {
			const response = await axios.post(
				"http://localhost:5000/criarnoservidor",
				{ content: inputValue }
			);
			console.log("Dado criado com sucesso!", inputValue);
			const dadosDoServidor = response.data.message;
		} catch (error) {
			console.log(error);
			console.error("Erro ao salvar dados:", error);
		}
	};

	return (
		<div>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button onClick={salvarDados}>Salvar</button>
		</div>
	);
}

export default Write;
