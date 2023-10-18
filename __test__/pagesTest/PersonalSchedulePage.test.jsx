/**
 * @jest-environment jsdom
 */
import React from "react";
import ReactDOM from "react-dom";

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

const TITLE_TEXT = "일정 1";
const getInitialScheduleState = (recurrence) => {
	return {
		todaySchedules: [
			{
				id: 0,
				isGroup: false,
				title: TITLE_TEXT,
				startDateTime: new Date().toISOString(),
				endDateTime: new Date().toISOString(),
				recurrence,
			},
		],
		calendarSchedules: [],
		schedulesForTheWeek: [],
	};
};

describe("PersonalSchedulePage without ScheduleModal", () => {
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
		render(<PersonalSchedulePage />, {
			preloadedState: {
				schedule: getInitialScheduleState(0),
			},
		});

		const addButton = screen.queryByRole("button", {
			name: "아직 추가된 일정이 없습니다! 할 일을 추가하여 하루동안 할 일을 관리해보세요.",
		});
		const todaySchedule = screen.queryByRole("heading", { name: TITLE_TEXT });
		expect(addButton).toBeNull();
		expect(todaySchedule).not.toBeNull();
	});

	it("render '반복' text when todaySchedules contain recurring schedule", () => {
		render(<PersonalSchedulePage />, {
			preloadedState: {
				schedule: getInitialScheduleState(1),
			},
		});

		const addButton = screen.queryByRole("button", {
			name: "아직 추가된 일정이 없습니다! 할 일을 추가하여 하루동안 할 일을 관리해보세요.",
		});
		const todaySchedule = screen.queryByTestId("recurreningText");
		expect(addButton).toBeNull();
		expect(todaySchedule).not.toBeNull();
	});
});

describe("PersonalSchedulePage with Modal", () => {
	beforeAll(() => {
		ReactDOM.createPortal = jest.fn((element) => {
			return element;
		});
		window.scrollTo = jest.fn(() => {});
	});

	it("render ScheduleModal if click '일정 추가' button", () => {
		render(<PersonalSchedulePage />);

		userEvent.click(screen.queryByRole("button", { name: "일정 추가" }));

		const saveButton = screen.queryByRole("button", {
			name: "저장하기",
		});
		expect(saveButton).toBeDisabled();
	});

	it("render ScheduleModal if click big add button", () => {
		render(<PersonalSchedulePage />);

		userEvent.click(
			screen.queryByRole("button", {
				name: "아직 추가된 일정이 없습니다! 할 일을 추가하여 하루동안 할 일을 관리해보세요.",
			}),
		);

		const saveButton = screen.queryByRole("button", {
			name: "저장하기",
		});
		expect(saveButton).toBeDisabled();
	});
});
