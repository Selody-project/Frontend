import React from "react";

import { ContainerDiv, Input, LabelSpan } from "./CustomInput.style";

const CustomInput = ({ label, ...inputProps }) => {
	const { gap } = inputProps;

	return (
		<ContainerDiv gap={gap}>
			<LabelSpan>{label}</LabelSpan>
			<Input {...inputProps} />
		</ContainerDiv>
	);
};

export default CustomInput;
