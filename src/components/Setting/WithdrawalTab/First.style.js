import styled from "styled-components";

export const AgreeLabel = styled.label`
	margin-top: 36px;
	width: fit-content;
	display: flex;
	align-items: center;
	cursor: pointer;

	#hidden-checkbox {
		display: none;
	}
	#shown-checkbox {
		background-color: ${({ theme: { colors } }) => colors.white};
		width: 20px;
		height: 20px;
		border: 1px solid black;
		border-radius: 4px;
	}
	#hidden-checkbox:checked + #shown-checkbox {
		background-image: url("src/assets/icon/ic-checked-mark.svg");
		background-size: contain;
	}

	& > span {
		margin-left: 12px;
		color: ${({ theme: { colors } }) => colors.text_02};
		font-size: 20px;
		font-weight: ${({
			theme: {
				typography: { weight },
			},
		}) => weight.semibold};
	}
`;
