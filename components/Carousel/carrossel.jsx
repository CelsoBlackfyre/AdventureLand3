import React from "react";
import { Col, Container, Button, Modal, Carousel } from "react-bootstrap";
import IMAGENS from "../../src/imagens/index.jsx";
import park2 from "../../src/imagens/japanesepark.jpg";
import park3 from "../../src/imagens/japanesevillage.jpg";
import park4 from "../../src/imagens/brinquedo6.png";
import park5 from "../../src/imagens/rodagiganteteste.png";
import sakurahouse from "../../src/imagens/sakurahouse.jpg";
import WebFont from "webfontloader";
import "./carrossel.css";
function CarouselB() {
	const divStyles = {
		boxShadow: "1px 2px 9px #FF0000",
		margin: "4em",
		padding: "1em",
		paddingLeft: "5em",
		font: "Jersey 25 Charted",
	};
	return (
		<Carousel
			className="carousel-container font-loader"
			style={{ font: "Jersey 25 Charted" }}
			data-bs-theme="dark">
			<Carousel.Item className="carousel-image">
				<img className="d-block w-100" src={sakurahouse} alt="First slide" />
				<Carousel.Caption className="carousel-caption">
					<h5 className="text-white display-5 fw-bold">
						<span> SEJA BEM-VINDO AO NOSSO PARQUE</span>
					</h5>
					<p className="text-white fs-3">
						<span>私たちの公園へようこそ</span>
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="carousel-image">
				<img className="d-block w-100" src={park3} alt="Second slide" />
				<Carousel.Caption className="carousel-caption">
					<h5 className="text-white display-5 fw-bold">
						<span> O MUNDO FANTASTICO DA CULTURA JAPONESA</span>
					</h5>
					<p className="text-white fs-3">
						<span>幻想的な日本文化の世界</span>
					</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="carousel-image">
				<img className="d-block w-100" src={park4} alt="Third slide" />
				<Carousel.Caption className="carousel-caption">
					<h5 className="text-white display-5 fw-bold">
						<span>VENHA CONHECER NOSSAS ATRACOES</span>
					</h5>
					<p className="text-white fs-3">
						<span>私たちのアトラクションを見に来てください</span>
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselB;
