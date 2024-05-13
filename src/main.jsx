import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import IMAGENS from "./imagens/index.jsx";
import CadastroForm from "./CadastroForm.jsx";
import Sobre from "./sobre.jsx";
import CarouselB from "../components/Carousel/carrossel.jsx";
import "./index.css";
import WebFont from "webfontloader";
import { useEffect } from "react";
import Jersey25 from "../components/font.jsx";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
