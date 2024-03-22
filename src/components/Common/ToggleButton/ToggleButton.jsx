import React from "react";

import { OuterDiv } from "./ToggleButton.styles";

const ToggleButton = ({ isActive }) => {
	return (
		<OuterDiv isActive={isActive}>
			<div />
		</OuterDiv>
	);
};

export default ToggleButton;
