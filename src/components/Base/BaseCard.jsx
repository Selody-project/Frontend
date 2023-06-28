import React from "react";
import PropTypes from "prop-types";
import { Wrapper as BaseCardWrapper } from "./BaseCard.styles.js";

const BaseCard = ({ children, className }) => {
	return <BaseCardWrapper className={className}>{children}</BaseCardWrapper>;
};

BaseCard.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string.isRequired,
};

export default BaseCard;
