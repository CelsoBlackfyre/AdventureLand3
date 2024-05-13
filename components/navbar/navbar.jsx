import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../navbar/navbar.css";

function NavbarAL() {
	return (
		<>
			{/* <style type="text/css">
				{`.navbar-al {
					background-color: #9c1e2e;
					background: #9c1e2e;
					background-attachment: fixed;
					animation: gradient 15s ease infinite;
					bgColor: "white";
					color: "white";
					navColor: "white";
				}`}
			</style> */}
			<Navbar expand="lg" className="bg-body-tertiary dark bgColor">
				<Container style={{ width: "100%" }}>
					<Navbar.Brand href="#home">
						<img
							src="../../src/imagens/logojapan.png"
							width={30}
							height={30}
							className="d-inline-block align-top"
							alt=""
						/>
					</Navbar.Brand>
					<span>アドベンチャーランド</span>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav>
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#loja">Loja</Nav.Link>
							<Nav.Link href="#alimentacao">Alimentacao</Nav.Link>
							<Nav.Link href="#Sobre">Sobre</Nav.Link>
							<Nav.Link href="#home">Socio</Nav.Link>
							<Nav.Link href="#home">Planos</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavbarAL;
