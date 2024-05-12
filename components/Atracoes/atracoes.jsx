import React from "react";
import { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

function Atracoes() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Col>
				<Row>
					<h2 className="text-white">Atracoes do Parque</h2>
					<h3 className="text-white">公園のアトラクション</h3>
				</Row>
			</Col>
			<Container fluid className=" text-white text-center">
				<Row mx={0}>
					<Col md={4}>
						<h2 className="text-white text-center display-5 fw-bold">
							Roda Gigante
						</h2>
						<img
							src="https://via.placeholder.com/300"
							className="modal show"
							style={{ display: "block", position: "initial" }}
							alt=""
							onClick={handleShow}
						/>
						<Modal show={show} onHide={handleShow}>
							<Modal.Dialog>
								<Modal.Header closeButton>
									<Modal.Title>Roda Gigante 観覧車</Modal.Title>
								</Modal.Header>

								<Modal.Body>
									<p>
										Brinquedo tradicional, uma das atrações mais procuradas do
										parque. Sendo uma atração clássica, ela pode ser visitada em
										todos os dias e também serve para todas as idades.
									</p>
									<p>Intensidade: Moderada </p>
									<p>Preço: R$ 50</p>
									<p>
										Altura Minima: 1.16
										<br /> 60 cm acompanhado
									</p>
								</Modal.Body>

								<Modal.Footer>
									<Button variant="secondary" onClick={handleClose}>
										Fechar
									</Button>
									<Button variant="primary" onClick={handleClose}>
										Comprar
									</Button>
								</Modal.Footer>
							</Modal.Dialog>
						</Modal>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Atracoes;
