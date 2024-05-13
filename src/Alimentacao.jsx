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
import "./App.css";
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

export default function Alimentacao() {
	const [staticModal, setStaticModal] = useState(false);

	const toggleOpen = () => setStaticModal(!staticModal);
	return <></>;
}
