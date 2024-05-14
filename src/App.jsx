import { useState } from "react";
import "./App.css";
import CarouselB from "../components/Carousel/carrossel.jsx";
import NavbarAL from "../components/navbar/navbar.jsx";
import Galeria from "../components/Galeria/galeria.jsx";
import AppHeader from "../src/Header.jsx";
import Alimentacao from "./Alimentacao.jsx";
import LoginForm from "./LoginForm.jsx";
import Footer from "../components/footer/footer.jsx";
import Formulario from "./Formulario.jsx";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import CadastroForm from "./CadastroForm.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loja from "./Loja.jsx";

function App() {
	return (
		<>
			<div className="App">
				<Formulario />
				{/*<CadastroForm />
				<Alimentacao />
				 <AppHeader />
				<Loja />
				<LoginForm />
				<Footer /> */}
			</div>
		</>
	);
}

export default App;
