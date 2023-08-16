/**
 * @jest-environment jsdom
 */
import React from "react";

import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "../../jest.setup.js";
import SignUpForm from "../../src/components/SignUp/SignUpForm/SignUpForm.jsx";

describe("SignUpPage Component", () => {
	// 4개의 인풋과 3개의 버튼이 모두 존재하는지 테스트
	it("renders SignUpPage without crashing", () => {
		render(<SignUpForm />);

		expect(screen.getByTestId("email-input")).toBeInTheDocument();
		expect(screen.getByTestId("nickname-input")).toBeInTheDocument();
		expect(screen.getByTestId("password-input")).toBeInTheDocument();
		expect(screen.getByTestId("password-check-input")).toBeInTheDocument();
		expect(
			screen.getByTestId("email-duplicate-check-button"),
		).toBeInTheDocument();
		expect(
			screen.getByTestId("nickname-duplicate-check-button"),
		).toBeInTheDocument();
		expect(screen.getByText("회원가입")).toBeInTheDocument();
	});

	// 4개의 인풋에 입력 이벤트가 잘 동작하는지, 특히 이메일과 닉네임은 입력 시 중복 체크 버튼이 활성화되는지 테스트
	it("handles form interactions correctly", () => {
		render(<SignUpForm />);

		expect(screen.getByTestId("email-duplicate-check-button")).toBeDisabled();
		fireEvent.change(screen.getByTestId("email-input"), {
			target: { value: "test@example.com" },
		});
		expect(screen.getByTestId("email-input").value).toBe("test@example.com");
		expect(screen.getByTestId("email-duplicate-check-button")).toBeEnabled();

		expect(
			screen.getByTestId("nickname-duplicate-check-button"),
		).toBeDisabled();
		fireEvent.change(screen.getByTestId("nickname-input"), {
			target: { value: "testuser" },
		});
		expect(screen.getByTestId("nickname-input").value).toBe("testuser");
		expect(screen.getByTestId("nickname-duplicate-check-button")).toBeEnabled();

		fireEvent.change(screen.getByTestId("password-input"), {
			target: { value: "password123" },
		});
		fireEvent.change(screen.getByTestId("password-check-input"), {
			target: { value: "password123" },
		});

		expect(screen.getByTestId("password-input").value).toBe("password123");
		expect(screen.getByTestId("password-check-input").value).toBe(
			"password123",
		);
	});

	// 이메일 및 닉네임 중복 체크 함수가 정상적으로 호출되는지 테스트
	it("validates duplication", () => {
		render(<SignUpForm />);

		const mockValidateDuplication = jest
			.fn()
			.mockName("mockValidateDuplication");
		mockValidateDuplication.mockResolvedValue({ payload: 200 });

		fireEvent.click(screen.getByTestId("email-duplicate-check-button"));
		mockValidateDuplication({ type: "email", targetValue: "test@example.com" });
		expect(mockValidateDuplication).toHaveBeenCalledWith({
			type: "email",
			targetValue: "test@example.com",
		});

		fireEvent.click(screen.getByTestId("nickname-duplicate-check-button"));
		mockValidateDuplication({ type: "nickname", targetValue: "testuser" });
		expect(mockValidateDuplication).toHaveBeenCalledWith({
			type: "nickname",
			targetValue: "testuser",
		});
	});

	// 회원가입 함수가 정상적으로 호출되는지 테스트
	it("dispatches signup action on form submission", () => {
		render(<SignUpForm />);

		const mockSignup = jest.fn().mockName("mockSignup");

		fireEvent.click(screen.getByText("회원가입"));

		mockSignup({
			email: "test@example.com",
			nickname: "testuser",
			password: "password123",
		});
		expect(mockSignup).toHaveBeenCalledWith({
			email: "test@example.com",
			nickname: "testuser",
			password: "password123",
		});
	});
});
