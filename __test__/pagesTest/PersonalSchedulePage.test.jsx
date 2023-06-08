/**
 * @jest-environment jsdom
 */
import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../jest.setup.js";
import "@testing-library/jest-dom";
import PersonalSchedulePage from "../../src/pages/PersonalSchedulePage";

jest.mock("@fullcalendar/react", () => () => (
	<div data-testid="mock-fullcalendar" />
));
jest.mock("@fullcalendar/timegrid", () => ({}));
jest.mock("@fullcalendar/daygrid", () => ({}));
jest.mock("@fullcalendar/interaction", () => ({}));

describe("PersonalSchedulePage", () => {
	it("renders Header, CalendarContainer, and PersonalTodoList", () => {
		render(<PersonalSchedulePage />);
		expect(screen.getByTestId("calendar-container")).toBeInTheDocument();
		expect(screen.getByTestId("personal-todo-list")).toBeInTheDocument();
	});
});
