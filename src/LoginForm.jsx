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
							style={{
								alignContent: "center",
								width: "200",
								height: "200",
								border: "none",
								outline: "none",
								padding: "7px 7px 7px 7px ",
								borderRadius: "6px",
								color: "#fff",
								fontSize: "15",
								backgroundColor: "#191919",
								boxShadow:
									"3px 3px 10px rgba(0, 0, 0, 1), -1px -1px 6px rgba(255, 255, 255, 0.4)",
							}}
						/>
					</Form.Group>
					<Form.Group className="mb-3 fs-5">
						<Form.Label className="text-white">Senha</Form.Label>
						<Form.Control
							type="password"
							placeholder="Digite sua senha"
							name="senha"
							onChange={onChange}
							style={{
								alignContent: "center",
								width: "200",
								height: "45",
								border: "none",
								outline: "none",
								padding: "7px 7px 7px 7px ",
								borderRadius: "6px",
								color: "#fff",
								fontSize: "15",
								backgroundColor: "#191919",
								boxShadow:
									"3px 3px 10px rgba(0, 0, 0, 1), -1px -1px 6px rgba(255, 255, 255, 0.4)",
							}}
						/>
					</Form.Group>
					<Button
						className="btn btn-dark mt-3"
						type="submit"
						style={{
							marginTop: "50px",
							width: "300px",
							alignContent: "center",
							fontSize: "1.4em",
							padding: " 7px 7px 7px 7px",
							borderRadius: "0.5em",
							border: "none",
							backgroundColor: "#000",
							color: "#fff",
							cursor: "pointer",
							boxShadow: "2px 2px 3px #000000b4",
						}}>
						Login
					</Button>
				</form>
			</Container>
		</>
	);
};

export default LoginForm;
