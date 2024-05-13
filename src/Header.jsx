import {
	MDBNavbar,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarBrand,
	MDBNavbarLink,
	MDBNavbarToggler,
	MDBContainer,
	MDBIcon,
	MDBCollapse,
} from "mdb-react-ui-kit";
import { useState } from "react";
import "./App.css";

function AppHeader() {
	const [openNavColorSecond, setOpenNavColorSecond] = useState(false);

	return (
		<>
			<MDBNavbar expand="lg" dark style={{ backgroundColor: "#000000" }}>
				<MDBContainer fluid>
					<MDBNavbarBrand href="#">Adventure Land</MDBNavbarBrand>

					<MDBNavbarToggler
						type="button"
						data-target="#navbarColor02"
						aria-controls="navbarColor02"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={() => setOpenNavColorSecond(!openNavColorSecond)}>
						<MDBIcon icon="bars" fas />
					</MDBNavbarToggler>
					<MDBCollapse open={openNavColorSecond} navbar id="navbarColor02">
						<MDBNavbarNav className="me-auto mb-2 mb-lg-0">
							<MDBNavbarItem className="active">
								<MDBNavbarLink aria-current="page" href="#">
									Home
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="#">Loja</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="#">Alimentacao</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="#">Sobre</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="#">Conta</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="#">Socio</MDBNavbarLink>
							</MDBNavbarItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		</>
	);
}

export default AppHeader;
