import React from "react";
import { LoaderGif } from "./index";

const Spinner = () => {
	return (
		<>
			<div className="spinner_loading">
				<figure>
					<img className="loader" src={LoaderGif} alt="loading..." />
				</figure>
			</div>
		</>
	);
};

export default Spinner;
