/**
 * @jest-environment jsdom
 */
import React from "react";

import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "../../jest.setup.js";
import SignUpPage from "../../src/pages/SignUpPage/SignUpPage.jsx";

describe("SignUpPage Component", () => {
	// 4개의 인풋과 3개의 버튼이 모두 존재하는지 테스트
	it("renders SignUpPage without crashing", () => {
		render(<SignUpPage />);

		expect(
			screen.getByRole("textbox", { name: "email-input" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("textbox", { name: "nickname-input" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("textbox", { name: "password-input" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("textbox", { name: "password-check-input" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: "email-duplicate-check-button" }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: "nickname-duplicate-check-button" }),
		).toBeInTheDocument();
		expect(screen.getByText("회원가입")).toBeInTheDocument();
	});

	// 4개의 인풋에 입력 이벤트가 잘 동작하는지, 특히 이메일과 닉네임은 입력 시 중복 체크 버튼이 활성화되는지 테스트
	it("handles form interactions correctly", () => {
		render(<SignUpPage />);

		expect(
			screen.getByRole("button", { name: "email-duplicate-check-button" }),
		).toBeDisabled();
		fireEvent.change(screen.getByRole("textbox", { name: "email-input" }), {
			target: { value: "test@example.com" },
		});
		expect(screen.getByRole("textbox", { name: "email-input" }).value).toBe(
			"test@example.com",
		);

		expect(
			screen.getByRole("button", { name: "nickname-duplicate-check-button" }),
		).toBeDisabled();
		fireEvent.change(screen.getByRole("textbox", { name: "nickname-input" }), {
			target: { value: "testuser" },
		});
		expect(screen.getByRole("textbox", { name: "nickname-input" }).value).toBe(
			"testuser",
		);

		fireEvent.change(screen.getByRole("textbox", { name: "password-input" }), {
			target: { value: "password123" },
		});
		fireEvent.change(
			screen.getByRole("textbox", { name: "password-check-input" }),
			{
				target: { value: "password123" },
			},
		);

		expect(screen.getByRole("textbox", { name: "password-input" }).value).toBe(
			"password123",
		);
		expect(
			screen.getByRole("textbox", { name: "password-check-input" }).value,
		).toBe("password123");
	});

	// 이메일 및 닉네임 중복 체크 함수가 정상적으로 호출되는지 테스트
	it("validates duplication", () => {
		render(<SignUpPage />);

		const mockValidateDuplication = jest
			.fn()
			.mockName("mockValidateDuplication");
		mockValidateDuplication.mockResolvedValue({ payload: 200 });

		fireEvent.click(
			screen.getByRole("button", { name: "email-duplicate-check-button" }),
		);
		mockValidateDuplication({ type: "email", targetValue: "test@example.com" });
		expect(mockValidateDuplication).toHaveBeenCalledWith({
			type: "email",
			targetValue: "test@example.com",
		});

		fireEvent.click(
			screen.getByRole("button", { name: "nickname-duplicate-check-button" }),
		);
		mockValidateDuplication({ type: "nickname", targetValue: "testuser" });
		expect(mockValidateDuplication).toHaveBeenCalledWith({
			type: "nickname",
			targetValue: "testuser",
		});
	});

	// 회원가입 함수가 정상적으로 호출되는지 테스트
	it("dispatches signup action on form submission", () => {
		render(<SignUpPage />);

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
