/**
 * @jest-environment jsdom
 */
import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../jest.setup.js";
import "@testing-library/jest-dom/extend-expect";
import LoginPage from "../../src/pages/LoginPage/LoginPage.jsx";

describe("LoginPage", () => {
	// 로그인 페이지 랜더링 테스트
	test("renders LoginPage without crashing", () => {
		render(<LoginPage />);
		const loginHeader = screen.getByText(/LOGIN/i);
		expect(loginHeader).toBeInTheDocument();
	});

	// 네이버로그인 버튼이 있는지 테스트
	test("renders Google login component", () => {
		render(<LoginPage />);
		const googleLoginElement = screen.getByTestId("google-login");
		expect(googleLoginElement).toBeInTheDocument();
	});

	// 구글로그인 버튼이 있는지 테스트
	test("renders Naver login component", () => {
		render(<LoginPage />);
		const naverLoginElement = screen.getByTestId("naver-login");
		expect(naverLoginElement).toBeInTheDocument();
	});
});
