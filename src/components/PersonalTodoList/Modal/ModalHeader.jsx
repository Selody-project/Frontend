import React from "react";
import { ModalHeaderStyled } from "./Modal.styles";

const ModalHeader = ({ currentDate }) => (
	<ModalHeaderStyled>
		<span>{currentDate}</span>
	</ModalHeaderStyled>
);

export default ModalHeader;
