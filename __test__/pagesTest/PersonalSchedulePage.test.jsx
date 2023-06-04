/**
 * @jest-environment jsdom
 */
import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../jest.setup.js";
import "@testing-library/jest-dom";
import PersonalSchedulePage from "../../src/pages/PersonalSchedulePage";

jest.mock("@daypilot/daypilot-lite-react");

describe("PersonalSchedulePage", () => {
	// PersonalSchedulePage 페이지 랜더링 테스트
	test("renders PersonalSchedulePage without crashing", () => {
		render(<PersonalSchedulePage />);
		const mainContainer = screen.getByRole("main");
		expect(mainContainer).toBeInTheDocument();
	});

	// 캘린더 랜더링 테스트
	test("renders Calendar component", () => {
		render(<PersonalSchedulePage />);

		// Check if the "월간" button is rendered
		const monthlyButton = screen.getByText(/월간/i);
		expect(monthlyButton).toBeInTheDocument();

		// Check if the "주간" button is rendered
		const weeklyButton = screen.getByText(/주간/i);
		expect(weeklyButton).toBeInTheDocument();
	});

	// 헤더 랜더링 테스트
	test("renders Header component", () => {
		render(<PersonalSchedulePage />);
		const headerElement = screen.getByRole("banner");
		expect(headerElement).toBeInTheDocument();
	});

	// PersonalTodoList 랜더링 테스트
	test("renders PersonalTodoList component", () => {
		render(<PersonalSchedulePage />);
		const personalTodoListElement = screen.getByText(/오늘의 할 일/i);
		expect(personalTodoListElement).toBeInTheDocument();
	});

	// Modal 랜더링 테스트
	test("renders Modal component", () => {
		render(<PersonalSchedulePage />);
		expect(screen.queryByTestId("modal")).toBeNull();

		const addEventButton = screen.getByText(/일정추가/i);
		fireEvent.click(addEventButton);
		expect(screen.getByRole("dialog")).toBeInTheDocument();
	});
});
