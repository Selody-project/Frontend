import React from "react";

import "@testing-library/jest-dom/extend-expect";

import { screen } from "@testing-library/react";

import { render } from "../../jest.setup";
import LandingPage from "../../src/pages/LandingPage/LandingPage";

describe("Landing", () => {
	it("test initial render", () => {
		render(<LandingPage />);
		// 텍스트 존재 확인
		expect(
			screen.getByRole("heading", { name: /selody$/i }),
		).toBeInTheDocument();
		expect(screen.getByRole("link", { name: /login/i })).toBeInTheDocument();
		expect(screen.getByRole("link", { name: "시작하기" })).toBeInTheDocument();
		expect(
			screen.getByRole("heading", {
				name: "Selody와 함께 그룹 일정 공유 및 관리를 해보세요 !",
			}),
		).toBeInTheDocument();
	});
});
