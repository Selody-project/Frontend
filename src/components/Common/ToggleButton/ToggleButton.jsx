import React from "react";

import { OuterDiv } from "./ToggleButton.style";

const ToggleButton = ({ isActive }) => {
	return (
		<OuterDiv isActive={isActive}>
			<div />
		</OuterDiv>
	);
};

export default ToggleButton;
