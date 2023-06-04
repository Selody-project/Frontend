import React from "react";
import { Wrapper as BaseCardWrapper } from "./BaseCard.styles.js";

const BaseCard = ({ children }) => {
	return <BaseCardWrapper>{children}</BaseCardWrapper>;
};

export default BaseCard;
