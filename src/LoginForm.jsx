import React from "react";
import { useState, useEffect } from "react";
import { Button, Form, Container, FormGroup } from "react-bootstrap";
import "./Custom.css";

const LoginForm = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const [form, setForm] = useState({
			email: "",
			nomeUsuario: "",
			senha: "",
		});
	};

	const onChange = (e) => {
		const { name, value } = e.target;
		setForm((prevForm) => ({ ...prevForm, [name]: value }));
	};

	return (
		<>
			<h1 className="text-white text-center" style={{ marginTop: "50px" }}>
				Login
			</h1>
			<h2 className="text-white text-center" style={{ marginBottom: "50px" }}>
				ログイン
			</h2>
			<Container
				fluid
				className="d-flex justify-content-center"
				style={{
					marginTop: "50px",
					alignContent: "center",
					alignItems: "center",
					justifyContent: "center",
				}}>
				<form className="form" onSubmit={handleSubmit} method="POST" action="">
					<Form.Group className="mb-3 fs-5">
						<Form.Label className="text-white">Email</Form.Label>
						<Form.Control
							type="email"
							placeholder="Digite seu email"
							name="email"
							onChange={onChange}
							style={{ width: "300px", alignContent: "center" }}
						/>
					</Form.Group>
					<Form.Group className="mb-3 fs-5">
						<Form.Label className="text-white">Senha</Form.Label>
						<Form.Control
							type="password"
							placeholder="Digite sua senha"
							name="senha"
							onChange={onChange}
							style={{ width: "300px", alignContent: "center" }}
						/>
					</Form.Group>
					<Button
						className="btn btn-dark mt-3"
						type="submit"
						style={{
							marginTop: "50px",
							width: "300px",
							alignContent: "center",
						}}>
						Login
					</Button>
				</form>
			</Container>
		</>
	);
};

export default LoginForm;
