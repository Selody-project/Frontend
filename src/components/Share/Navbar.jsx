import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Button";

const Navbar = () => {
	return (
		<Wrapper>
			<div>
				<NavLink to={"/share"}>공유 일정 확인</NavLink>
				<NavLink to={"1234"}>개인 일정</NavLink>
				<NavLink to={"4567"}>커뮤니티</NavLink>
			</div>
			<Button
				label={"공유 페이지 생성"}
				width={137}
				height={47}
				fontWeight={500}
				backgroundColor={"#9B9FAA"}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 105px 0 76px;
	height: 77px;
	border-bottom: 1px solid #e6e8f6;

	& div {
		display: flex;
		gap: 43px;
	}

	& a {
		color: ${({ theme }) => theme.colors.textUnSelected};
		font-size: ${({ theme }) => theme.typography.size.s2 + "px"};
		font-weight: ${({ theme }) => theme.typography.weight.regular};

		&.active {
			color: ${({ theme }) => theme.colors.text};
		}
	}
`;

export default Navbar;
