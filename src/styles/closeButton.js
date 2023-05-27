import { css } from "styled-components";

export const closeButton = ({ width, height }) => css`
	width: ${width}px;
	height: ${height}px;
	position: relative;

	&::after,
	&::before {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		height: 2px;
		background-color: black;
	}

	&::before {
		transform: translate(-50%, -50%) rotate(45deg);
	}

	&::after {
		transform: translate(-50%, -50%) rotate(-45deg);
	}
`;
