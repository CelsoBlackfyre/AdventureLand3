import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarAL() {
	return (
		<Navbar expand="lg" className="bg-body-tertiary navbar-al">
			<Container>
				<Navbar.Brand href="#home">Adventure Land</Navbar.Brand>
				<span>アドベンチャーランド</span>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#loja">Loja</Nav.Link>
						<Nav.Link href="#alimentacao">Alimentacao</Nav.Link>
						<Nav.Link href="#Sobre">Sobre</Nav.Link>
						<Nav.Link href="#home">Socio</Nav.Link>
						<Nav.Link href="#home">Planos</Nav.Link>
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Another action
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavbarAL;
