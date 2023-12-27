/**
 * @jest-environment jsdom
 */
import React from "react";
import ReactDOM from "react-dom";

import { userEvent } from "@storybook/testing-library";
import { screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import ScheduleModal from "@/components/Common/ScheduleModal/ScheduleModal.jsx";
import { SCHEDULE_MODAL_TYPE } from "@/constants/uiConstants";
import PersonalSchedulePage from "@/pages/PersonalSchedulePage/PersonalSchedulePage.jsx";
import lightTheme from "@/styles/theme.js";

import { render } from "../../jest.setup.js";

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
		schedule: {
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
			overlappedScheduleInfo: {
				title: "",
				schedules: [],
			},
		},
		ui: {
			isLoading: true,
			scheduleModalMode: SCHEDULE_MODAL_TYPE.CREATE,
		},
		auth: {
			user: { userId: 1 },
		},
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
		expect(todaySchedulesTab).toHaveStyle({
			backgroundColor: lightTheme.colors.white,
		});
		expect(schedulesForTheWeekTab).toHaveStyle({
			backgroundColor: lightTheme.colors.primary,
		});
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
			preloadedState: getInitialScheduleState(0),
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
			preloadedState: getInitialScheduleState(1),
		});

		const addButton = screen.queryByRole("button", {
			name: "아직 추가된 일정이 없습니다! 할 일을 추가하여 하루동안 할 일을 관리해보세요.",
		});
		const todaySchedule = screen.queryByTestId("recurreningText");
		expect(addButton).toBeNull();
		expect(todaySchedule).not.toBeNull();
	});
});

describe("open ScheduleModal in PersonalSchedulePage", () => {
	beforeAll(() => {
		ReactDOM.createPortal = jest.fn((element) => {
			return element;
		});
		window.scrollTo = jest.fn();
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

describe("display components in ScheduleModal", () => {
	beforeAll(() => {
		ReactDOM.createPortal = jest.fn((element) => {
			return element;
		});
		window.scrollTo = jest.fn();
	});

	// beforeEach(() => {
	// 	render(<PersonalSchedulePage />, {
	// 		preloadedState: {
	// 			schedule: getInitialScheduleState(0),
	// 		},
	// 	});
	// 	userEvent.click(screen.queryByRole("button", { name: "일정 추가" }));
	// });

	it("change displayed components if schedule is recurring or not", () => {
		render(<ScheduleModal />);

		// initial render
		const labelForToggleFreq = screen.queryByRole("heading", {
			name: "반복 종료",
		});
		expect(labelForToggleFreq).toBeNull();

		// DAILY
		userEvent.click(screen.getByText("반복 안함"));
		userEvent.click(screen.getByText("매일"));

		expect(screen.getByText("매일")).toBeInTheDocument();
		expect(
			screen.getByRole("heading", {
				name: "반복 종료",
			}),
		).toBeInTheDocument();

		// DAILY_N
		userEvent.click(screen.getByText("매일"));
		userEvent.click(screen.getByText("N일 간격"));

		expect(screen.getByText("N일 간격")).toBeInTheDocument();
		expect(
			screen.getByRole("heading", {
				name: "반복 종료",
			}),
		).toBeInTheDocument();
		expect(screen.getByDisplayValue(1)).toBeInTheDocument();
		expect(screen.getByText("일 간격으로 반복합니다.")).toBeInTheDocument();

		// WEEKLY
		userEvent.click(screen.getByText("N일 간격"));
		userEvent.click(screen.getByText("매주"));

		expect(screen.getByText("매주")).toBeInTheDocument();
		expect(
			screen.getByRole("heading", {
				name: "반복 종료",
			}),
		).toBeInTheDocument();
		expect(screen.getByLabelText("월")).toBeInTheDocument();

		// WEEKLY_N
		userEvent.click(screen.getByText("매주"));
		userEvent.click(screen.getByText("N주 간격"));

		expect(screen.getByText("N주 간격")).toBeInTheDocument();
		expect(
			screen.getByRole("heading", {
				name: "반복 종료",
			}),
		).toBeInTheDocument();
		expect(screen.getByLabelText("월")).toBeInTheDocument();
		expect(screen.getByDisplayValue(1)).toBeInTheDocument();
		expect(screen.getByText("주 간격으로 반복합니다.")).toBeInTheDocument();

		// MONTHLY
		userEvent.click(screen.getByText("N주 간격"));
		userEvent.click(screen.getByText("매월"));

		expect(screen.getByText("매월")).toBeInTheDocument();
		expect(
			screen.getByRole("heading", {
				name: "반복 종료",
			}),
		).toBeInTheDocument();

		// MONTHLY_N
		userEvent.click(screen.getByText("매월"));
		userEvent.click(screen.getByText("N개월 간격"));

		expect(screen.getByText("N개월 간격")).toBeInTheDocument();
		expect(
			screen.getByRole("heading", {
				name: "반복 종료",
			}),
		).toBeInTheDocument();
		expect(screen.getByDisplayValue(1)).toBeInTheDocument();
		expect(screen.getByText("개월 간격으로 반복합니다.")).toBeInTheDocument();

		// YEARLY
		userEvent.click(screen.getByText("N개월 간격"));
		userEvent.click(screen.getByText("매년"));

		expect(screen.getByText("매년")).toBeInTheDocument();
		expect(
			screen.getByRole("heading", {
				name: "반복 종료",
			}),
		).toBeInTheDocument();

		// YEARLY_N
		userEvent.click(screen.getByText("매년"));
		userEvent.click(screen.getByText("N년 간격"));

		expect(screen.getByText("N년 간격")).toBeInTheDocument();
		expect(
			screen.getByRole("heading", {
				name: "반복 종료",
			}),
		).toBeInTheDocument();
		expect(screen.getByDisplayValue(1)).toBeInTheDocument();
		expect(screen.getByText("년 간격으로 반복합니다.")).toBeInTheDocument();
	});
});
