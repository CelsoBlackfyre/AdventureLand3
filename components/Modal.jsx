import React from "react";
import { useState } from "react";

import React, { useState } from "react";
import {
	MDBBtn,
	MDBModal,
	MDBModalDialog,
	MDBModalContent,
	MDBModalHeader,
	MDBModalTitle,
	MDBModalBody,
	MDBModalFooter,
} from "mdb-react-ui-kit";

export default function App() {
	const [staticModal, setStaticModal] = useState(false);

	const toggleOpen = () => setStaticModal(!staticModal);

	return (
		<>
			<MDBBtn onClick={toggleOpen}>Launch static backdrop modal</MDBBtn>

			<MDBModal
				staticBackdrop
				tabIndex="-1"
				open={staticModal}
				onClose={() => setStaticModal(false)}>
				<MDBModalDialog>
					<MDBModalContent>
						<MDBModalHeader>
							<MDBModalTitle>Modal title</MDBModalTitle>
							<MDBBtn
								className="btn-close"
								color="none"
								onClick={toggleOpen}></MDBBtn>
						</MDBModalHeader>
						<MDBModalBody>...</MDBModalBody>
						<MDBModalFooter>
							<MDBBtn color="secondary" onClick={toggleOpen}>
								Close
							</MDBBtn>
							<MDBBtn>Understood</MDBBtn>
						</MDBModalFooter>
					</MDBModalContent>
				</MDBModalDialog>
			</MDBModal>
		</>
	);
}
