import React from "react";

import { MDBCol, MDBRow, MDBContainer } from "mdb-react-ui-kit";
import { Container, Row, Col, Card } from "react-bootstrap";
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
			<MDBContainer>
				<MDBRow>
					<MDBCol size="md-3">
						<img src={park4} alt="" />
					</MDBCol>
					<MDBCol size="md-3">
						<img src={park6} alt="" />
					</MDBCol>
					<MDBCol size="md-3">
						<img src={park5} alt="" />
					</MDBCol>
					<MDBCol size="md-3">
						<img src={park7} alt="" />
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<MDBContainer>
				<MDBRow>
					<MDBCol size="md-3">
						<img src={park} alt="" />
					</MDBCol>
					<MDBCol size="md-3">
						<img src={park2} alt="" />
					</MDBCol>
					<MDBCol size="md-3">
						<img src={park3} alt="" />
					</MDBCol>
					<MDBCol size="md-3">
						<img src={park4} alt="" />
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</>
	);
}

export default Galeria;
