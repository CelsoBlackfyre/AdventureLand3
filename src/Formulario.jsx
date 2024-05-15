import { Button, Form, Container } from "react-bootstrap";
import React from "react";
import { MDBInput } from "mdb-react-ui-kit";
// import "./Custom.css";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import "./form.css";

const CadastroForm = () => {
	// const [errors, setErros] = useState({});

	const validarForm = (dados) => {
		const errors = {};

		if (!dados.nome) {
			errors.nome = "Nome de usuario é necessario";
		}

		if (!dados.email) {
			errors.email = "Email é necessario";
		} else if (!/\S+@\S+\.\S+/.test(dados.email)) {
			errors.email = "Email é invalido";
		}

		if (!dados.idade) {
			errors.idade = "A idade é necessaria";
		} else if (dados.idade > 100 && dados.idade << 0)
			if (!dados.senha) {
				errors.senha = "Senha é necessaria";
			} else if (dados.senha.length < 8) {
				errors.senha = "Senha deve ter pelo menos 8 caracteres";
			}

		if (dados.confirmarSenha !== dados.senha) {
			errors.confirmarSenha = "Senhas não são iguais";
		}
		return errors;
	};

	const {
		register,
		handleSubmit,
		formState,
		formState: { errors },
	} = useForm({
		defaultValues: {
			nome: "",
			email: "",
			idade: "",
			senha: "",
			confirmarSenha: "",
			cidade: "",
			estado: "",
		},
	});

	const onSubmit = (data) => {
		console.log(data);
	};
	React.useEffect(() => {
		console.log("Use effect:", formState.errors);
	}, [formState]);

	return (
		<>
			<h1 className="text-white text-center" style={{ marginTop: "50px" }}>
				Cadastre-se
			</h1>
			<h2 className="text-white text-center" style={{ marginBottom: "50px" }}>
				サインアップ
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
				<form
					className="form"
					onSubmit={handleSubmit(onSubmit, validarForm)}
					noValidate
					method="POST"
					action="/">
					<Form.Group className="mb-3 fs-5">
						<Form.Label className="text-white">Nome</Form.Label>
						<MDBInput
							{...register("nome", { required: true })}
							label="Text input"
							id="typeText"
							type="text"
							name="nome"
							aria-invalid={errors ? "true" : "false"}
							style={{ width: "300px", alignContent: "center" }}
						/>
						{errors.nome && errors.nome.type === "required" && (
							<span role="alert">Isso é necessario</span>
						)}
						{errors.nome && errors.nome.type === "maxLength" && (
							<span>Nome muito grande</span>
						)}
					</Form.Group>
					<Form.Group className="mb-3 fs-5">
						<Form.Label className="text-white">E-mail</Form.Label>
						<MDBInput
							className="formS"
							name="email"
							label="Email input"
							id="typeEmail"
							{...register("email", {
								message: "Email obrigatorio ou invalido",
								required: true,
								pattern:
									/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							})}
							type="email"
							style={{ width: "300px", alignContent: "center" }}
						/>
						{errors.email && (
							<span className="error-message">
								Email obrigatório ou invalido
							</span>
						)}
					</Form.Group>
					<Form.Group className="mb-3 fs-5">
						<Form.Label className="text-white">Idade</Form.Label>
						<MDBInput
							{...register("idade", { required: true })}
							label="Number input"
							id="typeNumber"
							type="number"
							style={{ width: "300px", alignContent: "center" }}
						/>
						{errors.idade && (
							<span className="error-message">Idade obrigatória</span>
						)}
					</Form.Group>
					<Form.Group className="mb-3 fs-5">
						<Form.Label className="text-white">Sexo</Form.Label>
						<Form.Check
							type="checkbox"
							{...register("sexo", { required: true })}
							name="sexo"
							className="text-white fs-6"
							label="Masculino"></Form.Check>
						<Form.Check
							type="checkbox"
							{...register("sexo", { required: true })}
							name="sexo"
							className="text-white fs-6"
							label="Feminino"></Form.Check>
						<Form.Check
							type="checkbox"
							{...register("sexo", { required: true })}
							name="sexo"
							className="text-white fs-6"
							label="Outro"></Form.Check>
						{errors.sexo && (
							<span className="error-message">Sexo obrigatório</span>
						)}
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label className="text-white fs-5">Endereço</Form.Label>
						<MDBInput
							label="Text input"
							id="typeText"
							type="text"
							name="endereco"
							{...register("endereco", { required: true })}
							style={{ width: "300px", alignContent: "center" }}
						/>
						{errors.endereco && (
							<span className="error-message">Endereço obrigatório</span>
						)}
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label className="text-white fs-5">Cidade</Form.Label>
						<MDBInput
							label="Text input"
							id="typeText"
							type="text"
							name="cidade"
							{...register("cidade", { required: true })}
							style={{ width: "300px", alignContent: "center" }}
						/>
						{errors.cidade && (
							<span className="error-message">Cidade obrigatória</span>
						)}
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label className="text-white fs-5">Estado</Form.Label>
						<MDBInput
							label="Text input"
							id="typeText"
							type="text"
							name="estado"
							{...register("estado", { required: true })}
							style={{ width: "300px", alignContent: "center" }}
						/>
						{errors.estado && (
							<span className="error-message">Estado obrigatório</span>
						)}
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label className="text-white fs-5">Nome de Usuario</Form.Label>
						<MDBInput
							type="text"
							name="nomeUsuario"
							{...register("nomeUsuario", { required: true })}
							placeholder="Nome de Usuario"
							style={{ width: "300px", alignContent: "center" }}
						/>
						{errors.nomeUsuario && (
							<span className="error-message">Nome de Usuário obrigatório</span>
						)}
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label className="text-white fs-5">Senha</Form.Label>
						<MDBInput
							label="Password input"
							id="typePassword"
							type="password"
							name="senha"
							{...register("senha", { required: true })}
							style={{ width: "300px", alignContent: "center" }}
						/>
						{errors.senha && (
							<span className="error-message">Senha obrigatória</span>
						)}
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label className="text-white fs-5">Confirmar Senha</Form.Label>
						<MDBInput
							label="Password input"
							id="typePassword"
							type="password"
							name="confirmarSenha"
							{...register("confirmarSenha", { required: true })}
							placeholder="Confirmar Senha"
							style={{ width: "300px", alignContent: "center" }}
						/>
						{errors.confirmarSenha && (
							<span className="error-message">Confirmar Senha</span>
						)}
					</Form.Group>
					<Button
						className="mt-3"
						variant="dark"
						type="submit"
						style={{
							marginTop: "50px",
							width: "300px",
							alignContent: "center",
							marginBottom: "100px",
						}}>
						Cadastrar
					</Button>
				</form>
			</Container>
		</>
	);
};

export default CadastroForm;
