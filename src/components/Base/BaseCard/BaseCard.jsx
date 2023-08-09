import React from "react";
import { Wrapper as BaseCardWrapper } from "./BaseCard.styles.js";

const BaseCard = ({ children, className }) => {
	return <BaseCardWrapper className={className}>{children}</BaseCardWrapper>;
};

export default BaseCard;
