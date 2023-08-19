/**
 * @jest-environment jsdom
 */
import React from "react";

import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "../../jest.setup.js";
import FeedPage from "../../src/pages/FeedPage.jsx";

describe("Feedpage", () => {
	// 피드 페이지 렌더링 테스트
	test("renders FeedPage without crashing", () => {
		render(<FeedPage />);
		expect(screen.getByText("내 그룹 피드").toBeInTheDocument());
		expect(screen.getByText("그룹 검색").toBeInTheDocument());
	});

	// 추후에 내가 속한 그룹이 다 뜨는지 테스트 코드 작성 예정
});
