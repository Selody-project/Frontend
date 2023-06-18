import styled from "styled-components";

export const Wrapper = styled.form`
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1rem;
	.check {
		display: inline-block;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background-color: ${(props) => (props.checked ? "#C9CCD7" : "transparent")};
		border: ${(props) => (props.checked ? "none" : "2px solid #C9CCD7")};
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.info {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		h3 {
			font-size: 1.15rem;
			font-weight: 700;
			padding-bottom: 0.3rem;
		}
		p {
			span {
				padding-right: 0.2rem;
			}
		}
	}
	.icon svg {
		color: #a495ff;
		font-size: 1.5rem;
		cursor: pointer;
	}
`;
