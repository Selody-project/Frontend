import React from "react";

import { BaseCardLayoutDiv } from "./BaseCard.styles.js";

const BaseCard = ({ children, className }) => {
	return (
		<BaseCardLayoutDiv className={className}>{children}</BaseCardLayoutDiv>
	);
};

export default BaseCard;
