import React from "react";
import { useState } from "react";
import {
	MDBNavbar,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarBrand,
	MDBNavbarLink,
	MDBNavbarToggler,
	MDBContainer,
	MDBCardFooter,
	MDBCardGroup,
	MDBCardImage,
	MDBCardText,
	MDBModalContent,
	MDBModalBody,
	MDBModalHeader,
	MDBModal,
	MDBBtn,
	MDBModalTitle,
	MDBModalFooter,
	MDBCardBody,
	MDBCardTitle,
	MDBCard,
	MDBModalDialog,
	MDBRow,
	MDBCol,
	MDBIcon,
	MDBCollapse,
} from "mdb-react-ui-kit";
import girltea from "../src/video/japanesetea.mp4";
import kombucha from "../src/imagens/kombuchaimg.jpg";
import aojiru from "../src/imagens/aojiruimg.jpg";
import sakuratea from "../src/imagens/sakuracha.jpg";
import uroncha from "../src/imagens/uronchaimg.jpg";
import ofukucha from "../src/imagens/Obukuchaimg.jpg";
import mugicha from "../src/imagens/mugichaimg.jpg";

export default function ModalBebida() {
	const [staticModal, setStaticModal] = useState(false);

	const toggleOpen = () => setStaticModal(!staticModal);
	return (
		<>
			<MDBContainer>
				<h1 className="text-white text-center" style={{ marginTop: "50px" }}>
					Alimentação
				</h1>
				<h2 className="text-white text-center">食べ物</h2>
				<MDBRow className="d-flex justify-content-md-center">
					{/* Modal Bebidas */}

					{/* Modal Alimentacao */}
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
						</MDBCard>
						<MDBBtn onClick={toggleOpen} className="fs-1">
							Confira
						</MDBBtn>

						<MDBModal
							staticBackdrop
							tabIndex="-1"
							open={staticModal}
							onClose={() => setStaticModal(false)}>
							<MDBModalDialog size="xl">
								<MDBModalContent>
									<MDBModalHeader>
										<MDBModalTitle>Comida</MDBModalTitle>
										<MDBBtn
											className="btn-close"
											color="none"
											onClick={toggleOpen}></MDBBtn>
									</MDBModalHeader>
									<MDBModalBody style={{ backgroundColor: "#191919" }}>
										<MDBRow className="row-cols-1 row-cols-md-3 g-4">
											<MDBCol>
												<MDBCard style={{ backgroundColor: "#191919" }}>
													<MDBCardImage
														src={kombucha}
														alt="..."
														position="top"
													/>
													<MDBCardBody>
														<MDBCardTitle className="text-danger">
															Kombucha
														</MDBCardTitle>
														<MDBCardText className="text-white fs-5">
															Kombucha é um chá geralmente preto ou verde,
															contém açucar, bacteria saudavel e levedura. A
															fermentação ocorre de uma semana até um mês, tem
															gosto parecido com vinagre.
														</MDBCardText>
													</MDBCardBody>
													<MDBCardFooter>
														<h4 className="text-danger">R$ 15,00</h4>
													</MDBCardFooter>
												</MDBCard>
											</MDBCol>
											<MDBCol>
												<MDBCard style={{ backgroundColor: "#191919" }}>
													<MDBCardImage src={aojiru} alt="..." position="top" />
													<MDBCardBody>
														<MDBCardTitle className="text-danger">
															Aojiru
														</MDBCardTitle>
														<MDBCardText className="text-white fs-5">
															Aojiru é uma bebida feita de vegetaism também é
															conhecida como bebida verde ou suco verde.
														</MDBCardText>
													</MDBCardBody>
													<MDBCardFooter>
														<h4 className="text-danger">R$ 15,00</h4>
													</MDBCardFooter>
												</MDBCard>
											</MDBCol>
											<MDBCol>
												<MDBCard style={{ backgroundColor: "#191919" }}>
													<MDBCardImage
														src={sakuratea}
														alt="..."
														position="top"
													/>
													<MDBCardBody style={{ backgroundColor: "#191919" }}>
														<MDBCardTitle className="text-danger">
															Chá de Sakura
														</MDBCardTitle>
														<MDBCardText className="text-white fs-5">
															Chá de Sakura é feito de flores de cerejeira, é
															muito popular no Japão. Tem um sabor suave, doce e
															floral e contém um bom aroma.
														</MDBCardText>
													</MDBCardBody>
													<MDBCardFooter>
														<h4 className="text-danger">R$ 15,00</h4>
													</MDBCardFooter>
												</MDBCard>
											</MDBCol>
											<MDBCol>
												<MDBCard style={{ backgroundColor: "#191919" }}>
													<MDBCardImage
														src={uroncha}
														alt="..."
														position="top"
													/>
													<MDBCardBody>
														<MDBCardTitle className="text-danger">
															Uroncha
														</MDBCardTitle>
														<MDBCardText className="text-white fs-5">
															Uronha é um chá, é feito com um processo de
															oxidação diferente que faz com que o gosto das
															flores seja mais forte.
														</MDBCardText>
													</MDBCardBody>
													<MDBCardFooter>
														<h4 className="text-danger">R$ 15,00</h4>
													</MDBCardFooter>
												</MDBCard>
											</MDBCol>
											<MDBCol>
												<MDBCard style={{ backgroundColor: "#191919" }}>
													<MDBCardImage
														src={ofukucha}
														alt="..."
														position="top"
													/>
													<MDBCardBody>
														<MDBCardTitle className="text-danger">
															Ofukucha
														</MDBCardTitle>
														<MDBCardText className="fs-5 text-white">
															Ofukucha é conhecido como chá de boa sorte, é
															feito com chá verde como normalmente e depois
															adiciona kombu seco e urna seca.
														</MDBCardText>
													</MDBCardBody>
													<MDBCardFooter>
														<h4 className="text-danger">R$ 15,00</h4>
													</MDBCardFooter>
												</MDBCard>
											</MDBCol>
											<MDBCol>
												<MDBCard style={{ backgroundColor: "#191919" }}>
													<MDBCardImage
														src={mugicha}
														alt="..."
														position="top"
													/>
													<MDBCardBody>
														<MDBCardTitle className="text-danger">
															Mugicha
														</MDBCardTitle>
														<MDBCardText className="fs-5 text-white">
															Mugicha é ima bebida sem cafína feita através de
															cevada assada. Tem um gosto parecido com café. É
															servida fria ou quente.
														</MDBCardText>
													</MDBCardBody>
													<MDBCardFooter>
														<h4 className="text-danger">R$ 15,00</h4>
													</MDBCardFooter>
												</MDBCard>
											</MDBCol>
										</MDBRow>
									</MDBModalBody>
									<MDBModalFooter>
										<MDBBtn color="secondary" onClick={toggleOpen}>
											Fechar
										</MDBBtn>
										<MDBBtn className="btn btn-danger">Tenho Interesse</MDBBtn>
									</MDBModalFooter>
								</MDBModalContent>
							</MDBModalDialog>
						</MDBModal>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</>
	);
}
