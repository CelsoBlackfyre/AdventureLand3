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
import foodexample from "../src/video/japanesefood.mp4";
import okonomiyakiimg from "../src/imagens/okonomiyakiimg.jpg";
import uramakisushi from "../src/imagens/uramakisushiimg.jpg";
import yakitori from "../src/imagens/yakitoriimg.jpg";
import tempura from "../src/imagens/tempuraimg.jpg";
import sashimi from "../src/imagens/sashimiimg.jpg";
import udon from "../src/imagens/udonimg.jpg";
import tonkatsu from "../src/imagens/Tonkatsu img.jpg";
import takoyaki from "../src/imagens/Takoyakiimg.jpeg";

export default function ModalComida() {
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
														src={okonomiyakiimg}
														alt="..."
														position="top"
													/>
													<MDBCardBody>
														<MDBCardTitle className="text-danger">
															Okonomiyaki
														</MDBCardTitle>
														<MDBCardText className="text-white fs-5">
															Okonomiyaki é uma receita japonesa, se parece com
															crepe ou até mesmo uma pizza. Esse prato
															diferenciado é bem famoso no país.
														</MDBCardText>
													</MDBCardBody>
													<MDBCardFooter>
														<h4 className="text-danger">R$ 25,00</h4>
													</MDBCardFooter>
												</MDBCard>
											</MDBCol>
											<MDBCol>
												<MDBCard style={{ backgroundColor: "#191919" }}>
													<MDBCardImage
														src={uramakisushi}
														alt="..."
														position="top"
													/>
													<MDBCardBody>
														<MDBCardTitle className="text-danger">
															Uramaki Sushi
														</MDBCardTitle>
														<MDBCardText className="text-white fs-5">
															Uramaki é um prato tipico do Japão, se trata de um
															sushi enrolado em arroz.
														</MDBCardText>
													</MDBCardBody>
													<MDBCardFooter>
														<h4 className="text-danger">R$ 25,00</h4>
													</MDBCardFooter>
												</MDBCard>
											</MDBCol>
											<MDBCol>
												<MDBCard style={{ backgroundColor: "#191919" }}>
													<MDBCardImage
														src={yakitori}
														alt="..."
														position="top"
													/>
													<MDBCardBody style={{ backgroundColor: "#191919" }}>
														<MDBCardTitle className="text-danger">
															Yakitori
														</MDBCardTitle>
														<MDBCardText className="text-white fs-5">
															Yakitori é uma espécie de frango grelhado tipo do
															Japão, banhado pelo famoso molho Yakitori.
														</MDBCardText>
													</MDBCardBody>
													<MDBCardFooter>
														<h4 className="text-danger">R$ 25,00</h4>
													</MDBCardFooter>
												</MDBCard>
											</MDBCol>
											<MDBCol>
												<MDBCard style={{ backgroundColor: "#191919" }}>
													<MDBCardImage
														src={tempura}
														alt="..."
														position="top"
													/>
													<MDBCardBody>
														<MDBCardTitle className="text-danger">
															Tempura
														</MDBCardTitle>
														<MDBCardText className="text-white fs-5">
															Tempua consiste em um prato japonês feito de
															frutos do mar e vegetais, são fritos e se trate de
															um prato bem antigo.
														</MDBCardText>
													</MDBCardBody>
													<MDBCardFooter>
														<h4 className="text-danger">R$ 25,00</h4>
													</MDBCardFooter>
												</MDBCard>
											</MDBCol>
											<MDBCol>
												<MDBCard style={{ backgroundColor: "#191919" }}>
													<MDBCardImage
														src={sashimi}
														alt="..."
														position="top"
													/>
													<MDBCardBody>
														<MDBCardTitle className="text-danger">
															Sashimi
														</MDBCardTitle>
														<MDBCardText className="fs-5 text-white">
															Se trata de um prato feito de carnes cruas
															fatiadas, geralmente peixe e frutos do mar mas
															vezes outros tipos de carne.
														</MDBCardText>
													</MDBCardBody>
													<MDBCardFooter>
														<h4 className="text-danger">R$ 25,00</h4>
													</MDBCardFooter>
												</MDBCard>
											</MDBCol>
											<MDBCol>
												<MDBCard style={{ backgroundColor: "#191919" }}>
													<MDBCardImage src={udon} alt="..." position="top" />
													<MDBCardBody>
														<MDBCardTitle className="text-danger">
															Udon
														</MDBCardTitle>
														<MDBCardText className="fs-5 text-white">
															Udon é um macarrão grosso servido com diversos
															molhos ou até mesmo frios. Geralmente é feito com
															sopa.
														</MDBCardText>
													</MDBCardBody>
													<MDBCardFooter>
														<h4 className="text-danger">R$ 25,00</h4>
													</MDBCardFooter>
												</MDBCard>
											</MDBCol>
											<MDBCol>
												<MDBCard style={{ backgroundColor: "#191919" }}>
													<MDBCardImage
														src={tonkatsu}
														alt="..."
														position="top"
													/>
													<MDBCardBody>
														<MDBCardTitle className="text-danger">
															Tonkatsu
														</MDBCardTitle>
														<MDBCardText className="fs-5 text-white">
															Tonkatsu é um prato japonês que consite um pedaço
															de porco frito tem óleo, os principais tipos são
															filé e lombo.
														</MDBCardText>
													</MDBCardBody>
													<MDBCardFooter>
														<h4 className="text-danger">R$ 25,00</h4>
													</MDBCardFooter>
												</MDBCard>
											</MDBCol>
											<MDBCol>
												<MDBCard style={{ backgroundColor: "#191919" }}>
													<MDBCardImage
														src={takoyaki}
														alt="..."
														position="top"
													/>
													<MDBCardBody>
														<MDBCardTitle className="text-danger">
															Takoyaki
														</MDBCardTitle>
														<MDBCardText className="fs-5 text-white">
															Se trata de um prato feito de carnes cruas
															fatiadas, geralmente peixe e frutos do mar mas
															vezes outros tipos de carne.
														</MDBCardText>
													</MDBCardBody>
													<MDBCardFooter>
														<h4 className="text-danger">R$ 25,00</h4>
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
