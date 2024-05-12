import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Col, Row, Container, Button, Modal, Carousel } from "react-bootstrap";
import "./App.css";
import CarouselB from "../components/Carousel/carrossel.jsx";
import NavbarAL from "../components/navbar/navbar.jsx";
import Galeria from "../components/Galeria/galeria.jsx";
import IMAGENS from "./imagens/index.jsx";
import CadastroForm from "./cadastroForm.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Read from "../components/read.jsx";
import Write from "../components/write.jsx";
import Jersey25 from "../components/font.jsx";
import { MDBCol } from "mdb-react-ui-kit";
import mongoose from "mongoose";
function App() {
	//controles do modal:
	const [count, setCount] = useState(0);

	return (
		<>
			<Router>
				<div className="App font-loader">
					<div>
						<span>
							<Link to="/read">Ler dados do servidor</Link>
						</span>
						<span>
							<Link to="/write">Criar dados no servidor</Link>
						</span>
					</div>

					<Routes>
						<Route path="/read" element={<Read />} />
						<Route path="/write" element={<Write />} />
						<Route path="/" element={<Write />} />
					</Routes>
				</div>
			</Router>

			<CadastroForm />
			{/*<NavbarAL />
			 <div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<Col>
				<Row>
					<h1 className="text-white">Adventure Land</h1>
					<h2 className="text-white">アドベンチャーランド</h2>
				</Row>
			</Col> 
			<CarouselB />
			<Galeria />*/}
		</>
	);
}

export default App;
