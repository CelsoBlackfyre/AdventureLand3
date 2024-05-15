import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const FormRegistro = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);
	const [items, setItems] = useState([]);
	useEffect(() => {
		axios
			.get("/api/items")
			.then((response) => setItems(response.data))
			.catch((error) => console.error(error));
	}, []);
	return (
		<div>
			<h1>Items</h1>
			<ul>
				{items.map((item) => (
					<li key={item._id}>
						<h3>{item.name}</h3>
						<p>{item.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
};
export default FormRegistro;

// 	<form onSubmit={handleSubmit(onSubmit)} noValidate>
// 		<div>
// 			<label>Name</label>
// 			<input name="name" {...register("nome")} />
// 		</div>
// 		<div>
// 			<label>Email</label>
// 			<input type="email" name="email" {...register("email")} />
// 		</div>
// 		{errors.email && errors.email.type === "required" && (
// 			<span role="alert">Isso é necessário</span>
// 		)}
// 		{errors.email && errors.email.type === "maxLength" && (
// 			<span role="alert">Limite de tamanho</span>
// 		)}
// 		<div>
// 			<label>Senha</label>
// 			<input type="password" name="password" {...register("senha")} />
// 		</div>
// 		<button>Enviar</button>
// 	</form>
