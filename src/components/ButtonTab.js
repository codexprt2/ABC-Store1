import { Button } from "@material-ui/core";
import React from "react";

const ButtonTab = ({ name, onClick }) => {
	return (
		<div>
			<Button variant='contained' onClick={onClick}>
				{name}
			</Button>
		</div>
	);
};

export default ButtonTab;
