import React, { useEffect, useState } from "react";
import axios from "axios";

function Read() {
	const [serverData, setServerData] = useState("");

	useEffect(() => {
		const buscarDados = async () => {
			try {
				const response = await axios.get(
					"http://localhost:5000/buscarnoservidor"
				);
				const serverData = response.data.message;
				setServerData(serverData);
			} catch (error) {
				console.log(error);
			}
		};
		buscarDados();
	}, []);
	return (
		<div>
			<h1>{serverData}</h1>
		</div>
	);
}

export default Read;
