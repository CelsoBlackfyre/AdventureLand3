import React from "react";
import { useState } from "react";
import ModalComida from "../components/ModalComida.jsx";
import ModalBebida from "../components/ModalBebidas.jsx";
import {
	MDBCard,
	MDBCardBody,
	MDBCardTitle,
	MDBCardText,
	MDBBtn,
	MDBCol,
	MDBRow,
} from "mdb-react-ui-kit";
import girltea from "../src/video/japanesetea.mp4";
import foodexample from "../src/video/japanesefood.mp4";
import "../src/App.css";

export default function Alimentacao() {
	return (
		<>
			<MDBRow>
				<MDBCol>
					<MDBCard className="h-100" style={{ backgroundColor: "#191919" }}>
						<video className="h-100" autoPlay loop muted>
							<source src={girltea} type="video/mp4" />
						</video>
						<MDBCardBody>
							<MDBCardTitle
								className="text-center fs-1"
								style={{ color: "red" }}>
								Comidas
							</MDBCardTitle>
							<MDBCardText className="fs-4 text-white">
								Veja o melhor que a culinaria japonesa pode oferecer.
							</MDBCardText>
						</MDBCardBody>
						<MDBBtn onClick={ModalBebida}>Confira</MDBBtn>;
					</MDBCard>
				</MDBCol>
				<MDBCol>
					<MDBCard className="h-100" style={{ backgroundColor: "#191919" }}>
						<video className="h-100" autoPlay loop muted>
							<source src={foodexample} type="video/mp4" />
						</video>
						<MDBCardBody>
							<MDBCardTitle
								className="text-center fs-1"
								style={{ color: "red" }}>
								Comidas
							</MDBCardTitle>
							<MDBCardText className="fs-4 text-white">
								Veja o melhor que a culinaria japonesa pode oferecer.
							</MDBCardText>
						</MDBCardBody>

						<MDBBtn onClick={ModalComida}>Confira</MDBBtn>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</>
	);
}
