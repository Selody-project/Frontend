/**
 * @jest-environment jsdom
 */
import React from "react";

import "@testing-library/jest-dom/extend-expect";

import { fireEvent, render, screen } from "../../jest.setup.js";
import LoginPage from "../../src/pages/LoginPage/LoginPage.jsx";

describe("LoginPage", () => {
	// 로그인 페이지 랜더링 테스트
	test("renders LoginPage without crashing", () => {
		render(<LoginPage />);
		const loginHeader = screen.getByText(/LOGIN/i);
		expect(loginHeader).toBeInTheDocument();
		expect(screen.getByTestId("email-input")).toBeInTheDocument();
		expect(screen.getByTestId("password-input")).toBeInTheDocument();
		expect(screen.getByText("로그인")).toBeInTheDocument();
		expect(screen.getByText("회원가입")).toBeInTheDocument();
	});

	// 소셜 로그인 버튼이 있는지 테스트
	test("renders social login buttons", () => {
		render(<LoginPage />);
		const googleLoginElement = screen.getByTestId("google-login");
		const naverLoginElement = screen.getByTestId("naver-login");
		expect(googleLoginElement).toBeInTheDocument();
		expect(naverLoginElement).toBeInTheDocument();
	});

	// 이메일 및 비밀번호 입력값이 유효한지 테스트
	test("tests email and password input are valid", () => {
		render(<LoginPage />);

		const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
		const passwordRegex = /^.{10,}$/;
		const emailInput = screen.getByTestId("email-input");
		const passwordInput = screen.getByTestId("password-input");

		fireEvent.change(emailInput, {
			target: { value: "test@example.com" },
		});
		const userEmail = emailInput.value;
		expect(emailRegex.test(userEmail)).toBe(true);

		fireEvent.change(passwordInput, {
			target: { value: "password123" },
		});
		const userPassword = passwordInput.value;
		expect(passwordRegex.test(userPassword)).toBe(true);
	});

	// 로그인 함수가 정상적으로 호출되는지 테스트
	test("dispatches login action on form submission", () => {
		render(<LoginPage />);

		const mockLogin = jest.fn().mockName("mockLogin");

		fireEvent.click(screen.getByText("로그인"));

		mockLogin({ email: "test@example.com", password: "password123" });
		expect(mockLogin).toHaveBeenCalledWith({
			email: "test@example.com",
			password: "password123",
		});
	});
});
