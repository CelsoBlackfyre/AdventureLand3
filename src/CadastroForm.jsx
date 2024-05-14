import { Button, Form, Container } from "react-bootstrap";
import { MDBInput } from "mdb-react-ui-kit";
import "./Custom.css";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

const CadastroForm = () => {
	const [erros, setErros] = useState({});

	const validarForm = (dados) => {
		const erros = {};

		if (!dados.nome.trim()) {
			erros.nome = "Nome de usuario é necessario";
		}

		if (!dados.email.trim()) {
			erros.email = "Email é necessario";
		} else if (!/\S+@\S+\.\S+/.test(dados.email)) {
			erros.email = "Email é invalido";
		}

		if (!dados.idade.trim()) {
			erros.idade = "A idade é necessaria";
		} else if (dados.idade > 100 && dados.idade << 0)
			if (!dados.senha) {
				erros.senha = "Senha é necessaria";
			} else if (dados.senha.length < 8) {
				erros.senha = "Senha deve ter pelo menos 8 caracteres";
			}

		if (dados.confirmarSenha !== dados.senha) {
			erros.confirmarSenha = "Senhas não são iguais";
		}
		return erros;
	};

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
					onSubmit={handleSubmit(onSubmit)}
					method="POST"
					action="/">
					<Form.Group className="mb-3 fs-5">
						<Form.Label className="text-white">Nome</Form.Label>
						<MDBInput
							onChange={(e) => setForm({ ...form, nome: e.target.value })}
							label="Text input"
							id="typeText"
							type="text"
							style={{ width: "300px", alignContent: "center" }}
						/>
						{erros.nome && <span className="error-message">{erros.nome}</span>}
					</Form.Group>
					<Form.Group className="mb-3 fs-5">
						<Form.Label className="text-white">E-mail</Form.Label>
						<MDBInput
							onChange={(e) => setForm({ ...form, email: e.target.value })}
							label="Email input"
							id="typeEmail"
							type="email"
							style={{ width: "300px", alignContent: "center" }}
						/>
						{erros.email && (
							<span className="error-message">{erros.email}</span>
						)}
					</Form.Group>
					<Form.Group className="mb-3 fs-5">
						<Form.Label className="text-white">Idade</Form.Label>
						<MDBInput
							onChange={(e) => setForm({ ...form, idade: e.target.value })}
							label="Number input"
							id="typeNumber"
							type="number"
							style={{ width: "300px", alignContent: "center" }}
						/>
						{erros.idade && (
							<span className="error-message">{erros.idade}</span>
						)}
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
						<MDBInput
							label="Text input"
							id="typeText"
							type="text"
							onChange={(e) => setForm({ ...form, endereco: e.target.value })}
							style={{ width: "300px", alignContent: "center" }}
						/>
						{erros.endereco && (
							<span className="error-message">{erros.endereco}</span>
						)}
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label className="text-white fs-5">Cidade</Form.Label>
						<MDBInput
							label="Text input"
							id="typeText"
							type="text"
							onChange={(e) => setForm({ ...form, cidade: e.target.value })}
							style={{ width: "300px", alignContent: "center" }}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label className="text-white fs-5">Estado</Form.Label>
						<MDBInput
							label="Text input"
							id="typeText"
							type="text"
							onChange={(e) => setForm({ ...form, estado: e.target.value })}
							style={{ width: "300px", alignContent: "center" }}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label className="text-white fs-5">Nome de Usuario</Form.Label>
						<MDBInput
							type="text"
							name="nomeUsuario"
							onChange={(e) =>
								setForm({ ...form, nomeUsuario: e.target.value })
							}
							placeholder="Nome de Usuario"
							style={{ width: "300px", alignContent: "center" }}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label className="text-white fs-5">Senha</Form.Label>
						<MDBInput
							label="Password input"
							id="typePassword"
							type="password"
							onChange={(e) => setForm({ ...form, senha: e.target.value })}
							style={{ width: "300px", alignContent: "center" }}
						/>
						{erros.senha && (
							<span className="error-message">{erros.senha}</span>
						)}
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label className="text-white fs-5">Confirmar Senha</Form.Label>
						<MDBInput
							label="Password input"
							id="typePassword"
							type="password"
							onChange={(e) =>
								setForm({ ...form, confirmarSenha: e.target.value })
							}
							placeholder="Confirmar Senha"
							style={{ width: "300px", alignContent: "center" }}
						/>
						{erros.confirmarSenha && (
							<span className="error-message">{erros.confirmarSenha}</span>
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
