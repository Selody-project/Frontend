import React from "react";

import styled from "styled-components";

import { EmptySearchResultIcon } from "@/constants/iconConstants";

const EmptySearchGroup = () => {
	return (
		<LayoutDiv>
			<EmptySearchResultIcon />
			<h3>검색 결과가 없습니다.</h3>
			<h4>입력하신 검색어를 확인해 주세요</h4>
		</LayoutDiv>
	);
};

export default EmptySearchGroup;

const LayoutDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	border: 1px solid ${({ theme: { colors } }) => colors.btn_02};
	font-family: Inter;
	height: 486px;

	& > h3 {
		color: ${({ theme: { colors } }) => colors.text_01};
		font-size: 24px;
		font-weight: 500;
		margin-top: 18px;
	}

	& > h4 {
		color: ${({ theme: { colors } }) => colors.text_02};
		font-size: 14px;
		margin-top: 14px;
	}
`;
