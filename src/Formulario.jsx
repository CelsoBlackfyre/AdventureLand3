import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import React, { useState } from "react";

export const AddUsuario = () => {
	var [name, setName] = useState();
	const nomeUpdate = (event) => {
		setNome(event.target.value);
	};

	const handleSubmit = () => {
		const postURL = "http://localhost:4000/api/teste2/";
		fetch(postURL, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: nome,
				clockedIn: false,
				dates: [],
			}),
		}).then(() => {
			alert("ADICIONADO NO SISTEMA PARABENS");
		});
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Nome Completo:</label>
				<input required onChange={nomeUpdate}></input>
				<button type="submit">Enviar</button>
			</form>
		</div>
	);
};

export default AddUsuario;
