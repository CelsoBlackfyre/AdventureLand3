import { Button, Form, Container, FormControl } from "react-bootstrap";
import "./Custom.css";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const CadastroForm = () => {
	const { register, handleSubmit } = useForm();
	const [form, setForm] = useState({
		apelido: "",
		nome: "",
		email: "",
		idade: "",
		sexo: "",
		endereco: "",
		cidade: "",
		estado: "",
		nomeUsuario: "",
		senha: "",
		confirmarSenha: "",
	});

	const onSubmit = (data) => {
		console.log(data);
		// Code to save form data to MongoDB using Mongoose
	};

	const onChange = (e) => {
		const { name, value } = e.target;
		setForm((prevForm) => ({ ...prevForm, [name]: value }));
	};

	useEffect(() => {
		const loadFormData = () => {
			setForm({
				apelido: localStorage.getItem("apelido") || "",
				nome: localStorage.getItem("nome") || "",
				email: localStorage.getItem("email") || "",
				idade: localStorage.getItem("idade") || "",
				sexo: localStorage.getItem("sexo") || "",
				endereco: localStorage.getItem("endereco") || "",
				cidade: localStorage.getItem("cidade") || "",
				estado: localStorage.getItem("estado") || "",
				nomeUsuario: localStorage.getItem("nomeUsuario") || "",
				senha: localStorage.getItem("senha") || "",
				confirmarSenha: localStorage.getItem("confirmarSenha") || "",
			});
		};

		loadFormData();
	}, []);

	useEffect(() => {
		localStorage.setItem("apelido", form.apelido);
		localStorage.setItem("nome", form.nome);
		localStorage.setItem("email", form.email);
		localStorage.setItem("idade", form.idade);
		localStorage.setItem("sexo", form.sexo);
		localStorage.setItem("endereco", form.endereco);
		localStorage.setItem("cidade", form.cidade);
		localStorage.setItem("estado", form.estado);
		localStorage.setItem("nomeUsuario", form.nomeUsuario);
		localStorage.setItem("senha", form.senha);
		localStorage.setItem("confirmarSenha", form.confirmarSenha);
	}, [form]);

	return (
		<Container fluid>
			<h1 className="text-white">Cadastre-se</h1>
			<form
				className="form"
				onSubmit={handleSubmit(onSubmit)}
				method="POST"
				action="/cadastro">
				<Form.Group className="mb-3 fs-5">
					<Form.Label className="text-white">Apelido</Form.Label>
					<Form.Control
						type="text"
						name="apelido"
						onChange={(e) => setForm({ ...form, apelido: e.target.value })}
						style={{ width: "300px", alignContent: "center" }}
					/>
				</Form.Group>
				<Form.Group className="mb-3 fs-5">
					<Form.Label className="text-white">Nome</Form.Label>
					<Form.Control
						onChange={(e) => setForm({ ...form, nome: e.target.value })}
						type="text"
						name="nome"
						placeholder="Nome"
						style={{ width: "300px", alignContent: "center" }}
					/>
				</Form.Group>
				<Form.Group className="mb-3 fs-5">
					<Form.Label className="text-white">E-mail</Form.Label>
					<Form.Control
						onChange={(e) => setForm({ ...form, email: e.target.value })}
						type="email"
						name="email"
						placeholder="E-mail"
						style={{ width: "300px", alignContent: "center" }}
					/>
				</Form.Group>
				<Form.Group className="mb-3 fs-5">
					<Form.Label className="text-white">Idade</Form.Label>
					<Form.Control
						onChange={(e) => setForm({ ...form, idade: e.target.value })}
						type="number"
						name="idade"
						placeholder="Idade"
						min="18"
						style={{ width: "300px", alignContent: "center" }}
					/>
				</Form.Group>
				<Form.Group className="mb-3 fs-5">
					<Form.Label className="text-white">Sexo</Form.Label>
					<Form.Check
						type="checkbox"
						onChange={(e) => setForm({ ...form, sexo: e.target.value })}
						name="sexo"
						className="text-white fs-6"
						label="Masculino"></Form.Check>
					<Form.Check
						type="checkbox"
						onChange={(e) => setForm({ ...form, sexo: e.target.value })}
						name="sexo"
						className="text-white fs-6"
						label="Feminino"></Form.Check>
					<Form.Check
						type="checkbox"
						onChange={(e) => setForm({ ...form, sexo: e.target.value })}
						name="sexo"
						className="text-white fs-6"
						label="Outro"></Form.Check>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label className="text-white fs-5">Endereço</Form.Label>
					<Form.Control
						type="text"
						name="endereco"
						onChange={(e) => setForm({ ...form, endereco: e.target.value })}
						placeholder="Endereço"
						style={{ width: "300px", alignContent: "center" }}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label className="text-white fs-5">Cidade</Form.Label>
					<Form.Control
						type="text"
						name="cidade"
						onChange={(e) => setForm({ ...form, cidade: e.target.value })}
						placeholder="Cidade"
						style={{ width: "300px", alignContent: "center" }}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label className="text-white fs-5">Estado</Form.Label>
					<Form.Control
						type="text"
						name="estado"
						onChange={(e) => setForm({ ...form, estado: e.target.value })}
						placeholder="Estado"
						style={{ width: "300px", alignContent: "center" }}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label className="text-white fs-5">Nome de Usuario</Form.Label>
					<Form.Control
						type="text"
						name="nomeUsuario"
						onChange={(e) => setForm({ ...form, nomeUsuario: e.target.value })}
						placeholder="Nome de Usuario"
						style={{ width: "300px", alignContent: "center" }}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label className="text-white fs-5">Senha</Form.Label>
					<Form.Control
						type="password"
						name="senha"
						onChange={(e) => setForm({ ...form, senha: e.target.value })}
						placeholder="Senha"
						style={{ width: "300px", alignContent: "center" }}
					/>
				</Form.Group>
				<Form.Label className="text-white fs-5">Confirmar Senha</Form.Label>
				<Form.Control
					type="password"
					name="confirmarSenha"
					onChange={(e) => setForm({ ...form, confirmarSenha: e.target.value })}
					placeholder="Confirmar Senha"
					style={{ width: "300px", alignContent: "center" }}
				/>
				<Button
					className="mt-3"
					variant="dark"
					type="submit"
					style={{ marginTop: "50px" }}>
					Cadastrar
				</Button>
			</form>
			<a href="/view-feedback">View FeedBacks</a>
		</Container>
	);
};

export default CadastroForm;
