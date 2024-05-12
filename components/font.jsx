import { useEffect } from "react";
import WebFont from "webfontloader";

function Jersey25() {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ["Jersey 25 Charted"],
			},
		});
	});

	return <></>;
}

export default Jersey25;
