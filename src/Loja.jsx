import React from "react";
import {
	MDBNavbar,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarBrand,
	MDBNavbarLink,
	MDBNavbarToggler,
	MDBContainer,
	MDBCardFooter,
	MDBCardImage,
	MDBCardText,
	MDBCardBody,
	MDBCardTitle,
	MDBCard,
	MDBRow,
	MDBCol,
	MDBIcon,
	MDBCollapse,
} from "mdb-react-ui-kit";
import "./App.css";
import kitpalito from "../src/imagens/kitpalito.jpg";
import neko from "../src/imagens/maneki.jpg";
import katana from "../src/imagens/katana.jpg";
function Loja() {
	return (
		<>
			<h1>Loja</h1>
			<h2>店</h2>

			<MDBRow className="row-cols-1 row-cols-md-3 g-4">
				<MDBCol>
					<MDBCard className="h-100">
						<MDBCardImage src={kitpalito} alt="..." position="top" />
						<MDBCardBody>
							<MDBCardTitle className="text-center fs-2">
								Kit Hashi
							</MDBCardTitle>
							<MDBCardText>
								Hashi se trata dos famosos palitos que são utilizados para
								alimentação no Japão. Se trata de uma ferramenta resistente e
								você adorar usá-la para comer seu sushi.
							</MDBCardText>
						</MDBCardBody>
						<MDBCardFooter
							className="fs-3 text-center"
							style={{ backgroundColor: "#191919", color: "red" }}>
							R$ 30,00
						</MDBCardFooter>
					</MDBCard>
				</MDBCol>
				<MDBCol>
					<MDBCard className="h-100">
						<MDBCardImage src={neko} alt="..." position="top" />
						<MDBCardBody>
							<MDBCardTitle className="text-center fs-2">
								Maneki Neko
							</MDBCardTitle>
							<MDBCardText>
								Maneki Neko é uma figura comum no Japão pois acredita-se que els
								trazem boa sorte aos seus donos. Geralmente são feitos de
								cerâmica ou plástico.
							</MDBCardText>
						</MDBCardBody>
						<MDBCardFooter
							className="fs-3 text-center"
							style={{ backgroundColor: "#191919", color: "red" }}>
							R$ 50,00
						</MDBCardFooter>
					</MDBCard>
				</MDBCol>
				<MDBCol>
					<MDBCard className="h-100">
						<MDBCardImage src={katana} alt="..." position="top" />
						<MDBCardBody>
							<MDBCardTitle className="text-center fs-2">Katana</MDBCardTitle>
							<MDBCardText>
								Katana se trata de uma espada comum no Japão. Foi utilizada
								pelos guerreiros samurais e faz parte da tradição do país.
							</MDBCardText>
						</MDBCardBody>
						<MDBCardFooter
							className="fs-3 text-center"
							style={{ backgroundColor: "#191919", color: "red" }}>
							R$ 450,00
						</MDBCardFooter>
					</MDBCard>
				</MDBCol>
				<MDBCol>
					<MDBCard className="h-100">
						<MDBCardImage
							src="https://mdbootstrap.com/img/new/standard/city/044.webp"
							alt="..."
							position="top"
						/>
						<MDBCardBody>
							<MDBCardTitle>Card title</MDBCardTitle>
							<MDBCardText>
								This is a longer card with supporting text below as a natural
								lead-in to additional content. This content is a little bit
								longer.
							</MDBCardText>
						</MDBCardBody>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</>
	);
}

export default Loja;
