import React from "react";
import {
	MDBFooter,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBIcon,
} from "mdb-react-ui-kit";
import "./footer.css";

export default function Footer() {
	const styleFooter = {
		fontFamily: "Roboto, sans-serif",
	};
	return (
		<MDBFooter bgColor="dark" className="text-center text-white text-lg-start ">
			<section className="d-flex justify-content-center justify-content-lg-between p-2 border-bottom"></section>

			<section className="">
				<MDBContainer className="text-center text-md-start ">
					<MDBRow className="mt-3">
						<MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
							<h6 className="text-uppercase  mb-4">Adventure Land</h6>
							<p>
								Adventure Land é o maior parque temático do país, venha conhecer
								essa maravilha.
							</p>
							<button className="Btn">
								<span className="leftContainer" style={styleFooter}>
									<svg
										fill="white"
										viewBox="0 0 512 512"
										height="1em"
										xmlns="http://www.w3.org/2000/svg">
										<path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path>
									</svg>
									<span className="like" style={styleFooter}>
										Like
									</span>
								</span>
								<span className="likeCount" style={styleFooter}>
									2,050
								</span>
							</button>
						</MDBCol>

						<MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
							<h6 className="text-uppercase mb-4">O que temos</h6>
							<p>
								<a href="#!" className="text-reset">
									Parque de Diversao
								</a>
							</p>
							<p>
								<a href="#!" className="text-reset">
									Restaurantes
								</a>
							</p>
							<p>
								<a href="#!" className="text-reset">
									Lojas
								</a>
							</p>
						</MDBCol>

						<MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
							<h6 className="text-uppercase mb-4">Links Uteis</h6>
							<p>
								<a href="#!" className="text-reset">
									Planos
								</a>
							</p>
							<p>
								<a href="#!" className="text-reset">
									Ajuda
								</a>
							</p>
						</MDBCol>

						<MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase  mb-4 fs-5">Contact</h6>
							<p>Belo Horizonte, MG, Brasil</p>
							<p>celsomartinscarvalho@gmail.com</p>
							<p>31 98497-7467</p>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</section>

			<div className="text-center p-4" style={{ backgroundColor: "#191919" }}>
				© 2024 Copyright:
				<a
					className="text-reset fw-bold"
					href="https://github.com/CelsoBlackfyre"
					style={styleFooter}>
					Celso Blackfyre
				</a>
			</div>
		</MDBFooter>
	);
}
