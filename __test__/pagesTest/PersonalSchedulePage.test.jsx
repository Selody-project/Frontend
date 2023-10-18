/**
 * @jest-environment jsdom
 */
import React from "react";

import { userEvent } from "@storybook/testing-library";
import { screen } from "@testing-library/react";

import { render } from "../../jest.setup.js";
import "@testing-library/jest-dom";
import PersonalSchedulePage from "../../src/pages/PersonalSchedulePage/PersonalSchedulePage.jsx";
import lightTheme from "../../src/styles/theme.js";

jest.mock("@fullcalendar/react", () => () => (
	<div data-testid="mock-fullcalendar" />
));
jest.mock("@fullcalendar/timegrid", () => ({}));
jest.mock("@fullcalendar/daygrid", () => ({}));
jest.mock("@fullcalendar/interaction", () => ({}));

jest.mock(
	"../../src/components/Common/CalendarContainer/CustomCalendar/CustomCalendar.jsx",
	() => {
		const { forwardRef } = jest.requireActual("react");
		return {
			__esModule: true,
			default: forwardRef(() => <div data-testid="calendar-container" />),
		};
	},
);

describe("PersonalSchedulePage", () => {
	it("renders Header, CalendarContainer, and PersonalTodoList", () => {
		render(<PersonalSchedulePage />);
		expect(screen.getByTestId("calendar-container")).toBeInTheDocument();
		expect(screen.getByTestId("personal-todo-list")).toBeInTheDocument();
	});

	it("render todaySchedules tab and add button when first rendered with empty schedules", () => {
		render(<PersonalSchedulePage />);

		const todayTab = screen.queryByRole("button", { name: "오늘 일정" });
		const addButton = screen.queryByRole("button", {
			name: "아직 추가된 일정이 없습니다! 할 일을 추가하여 하루동안 할 일을 관리해보세요.",
		});
		expect(todayTab).not.toBeNull();
		expect(addButton).not.toBeNull();
	});

	it("render schedulesForTheWeek tab when click '예정' button", () => {
		render(<PersonalSchedulePage />);

		const schedulesForTheWeekTab = screen.queryByRole("button", {
			name: "예정",
		});
		userEvent.click(schedulesForTheWeekTab);

		const todaySchedulesTab = screen.queryByRole("button", {
			name: "오늘 일정",
		});
		expect(todaySchedulesTab).toHaveStyle(
			`background-color: ${lightTheme.colors.white}`,
		);
		expect(schedulesForTheWeekTab).toHaveStyle(
			`background-color: ${lightTheme.colors.primary}`,
		);
	});

	it("render todaySchedules tab when click '오늘 일정' button after click '예정' button", () => {
		render(<PersonalSchedulePage />);

		const schedulesForTheWeekTab = screen.queryByRole("button", {
			name: "예정",
		});
		const todaySchedulesTab = screen.queryByRole("button", {
			name: "오늘 일정",
		});
		userEvent.click(schedulesForTheWeekTab);
		userEvent.click(todaySchedulesTab);

		expect(todaySchedulesTab).toHaveStyle(
			`background-color: ${lightTheme.colors.primary}`,
		);
		expect(schedulesForTheWeekTab).toHaveStyle(
			`background-color: ${lightTheme.colors.white}`,
		);
	});

	it("do not render schedule add button and render one todaySchedule when todaySchedule is not empty", () => {
		const titleString = "일정 1";
		render(<PersonalSchedulePage />, {
			preloadedState: {
				schedule: {
					todaySchedules: [
						{
							id: 0,
							isGroup: false,
							title: titleString,
							startDateTime: new Date().toISOString(),
							endDateTime: new Date().toISOString(),
							recurrence: 0,
						},
					],
					calendarSchedules: [],
					schedulesForTheWeek: [],
				},
			},
		});

		const addButton = screen.queryByRole("button", {
			name: "아직 추가된 일정이 없습니다! 할 일을 추가하여 하루동안 할 일을 관리해보세요.",
		});
		const todaySchedule = screen.queryByRole("heading", { name: titleString });
		expect(addButton).toBeNull();
		expect(todaySchedule).not.toBeNull();
	});
});
