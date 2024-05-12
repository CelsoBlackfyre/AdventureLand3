import React from "react";
import { MDBCol } from "mdb-react-ui-kit";
import { Container, Row, Col } from "react-bootstrap";
import IMAGENS from "../../src/imagens/index.jsx";
import "./galeria.css";
import park from "../../src/imagens/park.png";
import park2 from "../../src/imagens/park2.png";
import park3 from "../../src/imagens/park3.png";
import park4 from "../../src/imagens/park4.png";
import park5 from "../../src/imagens/park5.png";
import park6 from "../../src/imagens/park6.png";
import park7 from "../../src/imagens/park7.png";
import park8 from "../../src/imagens/park8.png";

import Image from "react-bootstrap/Image";

function Galeria() {
	return (
		<>
			{/* <div className="d-flex align-items-start bg-body-tertiary mb-3">
				<MDBCol>
					<div className="imagem">
						<img src={park} alt="" />
					</div>
				</MDBCol>
				<MDBCol>
					<div className="imagem">
						<img src={park2} alt="" />
					</div>
				</MDBCol>
				<MDBCol>
					<div className="imagem">
						<img src={park3} alt="" />
					</div>
				</MDBCol>
			</div>
			<div
				className="d-flex align-items-start bg-body-tertiary mb-3"
				style={{ height: "200px" }}>
				<MDBCol>
					<img src={park4} alt="" />
				</MDBCol>
				<MDBCol>
					<img src={park5} alt="" />
				</MDBCol>
				<MDBCol>
					<img src={park6} alt="" />
				</MDBCol>
			</div>
			<div
				className="d-flex align-items-start bg-body-tertiary mb-3"
				style={{ height: "200px" }}>
				<MDBCol>
					<img src={park} alt="" />
				</MDBCol>
				<MDBCol>
					<img src={park2} alt="" />
				</MDBCol>
				<MDBCol>
					<img src={park3} alt="" />
				</MDBCol>
			</div>
			<div
				className="d-flex align-items-start bg-body-tertiary mb-3"
				style={{ height: "200px" }}>
				<MDBCol>
					<img src={park7} alt="" />
				</MDBCol>
				<MDBCol>
					<img src={park8} alt="" />
				</MDBCol>
				<MDBCol>
					<img src={park3} alt="" />
				</MDBCol>
			</div> */}

			<Container fluid>
				Galeria de Imagens
				<Row className="show-grid">
					<Col xs={4} md={4}>
						<div className="imagem">
							<img src={park} alt="" />
						</div>
					</Col>
					<Col xs={4} md={4}>
						<div className="imagem">
							<img src={park2} alt="" />
						</div>
					</Col>
					<Col xs={4} md={4}>
						<div className="imagem">
							<img src={park3} alt="" />
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Galeria;
