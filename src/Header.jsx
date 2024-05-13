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
			<MDBNavbar expand="lg" dark style={{ backgroundColor: "#191919" }}>
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
								<MDBNavbarLink
									aria-current="page"
									href="#"
									className="text-white">
									Home
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="#" className="text-white">
									Loja
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="#" className="text-white">
									Alimentacao
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="#" className="text-white">
									Sobre
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="#" className="text-white">
									Conta
								</MDBNavbarLink>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<MDBNavbarLink href="#" className="text-white">
									Socio
								</MDBNavbarLink>
							</MDBNavbarItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		</>
	);
}

export default AppHeader;
