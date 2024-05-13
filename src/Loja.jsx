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
import katana from "../src/imagens/sword-katana.jpg";
import sake from "../src/imagens/sake.jpg";
import vasodragao from "../src/imagens/vasodragao.jpg";
import camisadragao from "../src/imagens/camisa.jpg";
function Loja() {
	return (
		<>
			<MDBContainer>
				<h1 className="text-white text-center" style={{ marginTop: "50px" }}>
					Loja
				</h1>
				<h2 className="text-white text-center" style={{ marginBottom: "50px" }}>
					店
				</h2>
				<MDBRow className="d-flex justify-content-md-center row-cols-1 row-cols-md-3 g-4">
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
									Maneki Neko é uma figura comum no Japão pois acredita-se que
									els trazem boa sorte aos seus donos. Geralmente são feitos de
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
							<MDBCardImage src={sake} alt="..." position="top" />
							<MDBCardBody>
								<MDBCardTitle className="text-center fs-2">Sake</MDBCardTitle>
								<MDBCardText>
									Sake é uma bebida alcoolica no Japão. Se trata de uma bebida
									tradicional feita através da fermentação do arroz.
								</MDBCardText>
							</MDBCardBody>
							<MDBCardFooter
								className="fs-3 text-center"
								style={{ backgroundColor: "#191919", color: "red" }}>
								R$ 35,00
							</MDBCardFooter>
						</MDBCard>
					</MDBCol>
					<MDBCol
						style={{
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
						}}>
						<MDBCard className="h-100">
							<MDBCardImage src={vasodragao} alt="..." position="top" />
							<MDBCardBody className="card-body">
								<MDBCardTitle className="text-center fs-2">
									Vaso do Dragão
								</MDBCardTitle>
								<MDBCardText>
									Vaso com temática de dragão que é perfeito para decoração, se
									trata de um item bem produzido e resistente.
								</MDBCardText>
							</MDBCardBody>
							<MDBCardFooter
								className="fs-3 text-center"
								style={{ backgroundColor: "#191919", color: "red" }}>
								R$ 250,00
							</MDBCardFooter>
						</MDBCard>
					</MDBCol>
					<MDBCol>
						<MDBCard className="h-100">
							<MDBCardImage src={camisadragao} alt="..." position="top" />
							<MDBCardBody>
								<MDBCardTitle className="text-center fs-2">
									Camisa do Dragão
								</MDBCardTitle>
								<MDBCardText>
									Vaso com temática de dragão que é perfeito para decoração, se
									trata de um item bem produzido e resistente.
								</MDBCardText>
							</MDBCardBody>
							<MDBCardFooter
								className="fs-3 text-center"
								style={{ backgroundColor: "#191919", color: "red" }}>
								R$ 30,00
							</MDBCardFooter>
						</MDBCard>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</>
	);
}

export default Loja;
