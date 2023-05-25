import styled from "styled-components";
import { Select } from "./Select";

export const ToggleSelect = (props) => {
	return (
		<Wrapper isSelected={props.isSelected}>
			<Select {...props} />
			{props.isArrow ? (
				<DescList descs={props.descs} isSelected={props.isSelected} />
			) : (
				""
			)}
		</Wrapper>
	);
};

const DescList = ({ descs, isSelected }) => {
	return (
		<StyledDescList isSelected={isSelected}>
			{descs.map(({ title, desc }) => {
				return (
					<>
						<li>
							{title}
							{desc ? (
								<ul>
									{desc.map(({ title }) => {
										return <li>{title}</li>;
									})}
								</ul>
							) : (
								""
							)}
						</li>
					</>
				);
			})}
		</StyledDescList>
	);
};

const Wrapper = styled.div`
	border: ${(props) => (props.isSelected ? "1px solid black" : "")};
`;

const StyledDescList = styled.ul`
	display: ${(props) => (props.isSelected ? "flex" : "none")};
	flex-direction: column;
	justify-content: center;
	padding-top: 19.5px;
	padding-bottom: 26px;
	padding-left: 25px;
	/* list-style: disc;
	list-style-position: inside; */
	gap: 15px;
	border: none;
	font-size: 12px;
	font-weight: 400;
	line-height: 15px;
	color: #575b6a;

	& > li::before {
		content: "•";
		width: 4px;
		height: 4px;
		margin-right: 4px;
	}

	& ul {
		margin-top: 8px;
		font-size: 10px;
		line-height: 12px;
		color: #979daf;

		li {
			padding-left: 8px;
		}
	}
`;
