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

// jest.mock("@fullcalendar/react", () => () => (
// 	<div data-testid="mock-fullcalendar" />
// ));
// jest.mock("@fullcalendar/timegrid", () => ({}));
// jest.mock("@fullcalendar/daygrid", () => ({}));
// jest.mock("@fullcalendar/interaction", () => ({}));

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
const getInitialScheduleState = ({ recurrence, isAllDay }) => {
	const startDate = new Date();
	const endDate = new Date();
	if (isAllDay) {
		startDate.setHours(0, 0, 0, 0);
		endDate.setHours(23, 59, 59, 999);
	}
	return {
		schedule: {
			todaySchedules: [
				{
					id: 0,
					isGroup: false,
					title: TITLE_TEXT,
					startDateTime: startDate.toISOString(),
					endDateTime: endDate.toISOString(),
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

describe("PersonalSchedulePage", () => {
	describe("initial render and update ui after fetching", () => {
		it("initial render with on all-day todaySchedule", async () => {
			render(<PersonalSchedulePage />, {
				preloadedState: {
					auth: {
						user: {
							userId: 1,
						},
					},
				},
			});
			// before fetching schedules
			const calendar = screen.getByTestId("calendar-container");
			const todaySchedulesTab = screen.getByRole("button", {
				name: "오늘 일정",
			});
			const schedulesForTheWeekTab = screen.getByRole("button", {
				name: "예정",
			});
			let addButton = screen.getByRole("button", {
				name: "아직 추가된 일정이 없습니다! 할 일을 추가하여 하루동안 할 일을 관리해보세요.",
			});

			expect(calendar).toBeInTheDocument();
			expect(todaySchedulesTab).toHaveStyle({
				backgroundColor: lightTheme.colors.primary,
			});
			expect(schedulesForTheWeekTab).toHaveStyle({
				backgroundColor: lightTheme.colors.white,
			});
			expect(addButton).toBeInTheDocument();

			// fetching
			await screen.findByText("오늘오늘");

			// after fetching schedules
			addButton = screen.queryByRole("button", {
				name: "아직 추가된 일정이 없습니다! 할 일을 추가하여 하루동안 할 일을 관리해보세요.",
			});
			const todayScheduleItem = screen.getByText(
				`${new Date().getMonth() + 1}월 ${new Date().getDate()}일 하루 종일`,
			);

			expect(addButton).toBeNull();
			expect(todayScheduleItem).toBeInTheDocument();
		});

		it("render all-day tommorow schedule with changing tab color when user click '예정' tab", async () => {
			render(<PersonalSchedulePage />, {
				preloadedState: {
					auth: {
						user: {
							userId: 1,
						},
					},
				},
			});

			// initial
			const todaySchedulesTab = screen.getByRole("button", {
				name: "오늘 일정",
			});
			const schedulesForTheWeekTab = screen.getByRole("button", {
				name: "예정",
			});
			expect(todaySchedulesTab).toHaveStyle({
				backgroundColor: lightTheme.colors.primary,
			});
			expect(schedulesForTheWeekTab).toHaveStyle({
				backgroundColor: lightTheme.colors.white,
			});

			// action
			userEvent.click(schedulesForTheWeekTab);

			// fetching
			await screen.findByText("오늘오늘");

			// after fetching
			expect(todaySchedulesTab).toHaveStyle({
				backgroundColor: lightTheme.colors.white,
			});
			expect(schedulesForTheWeekTab).toHaveStyle({
				backgroundColor: lightTheme.colors.primary,
			});
			const nextDay = new Date();
			nextDay.setDate(nextDay.getDate() + 1);
			const scheduleItem = screen.getByText(
				`${nextDay.getMonth() + 1}월 ${nextDay.getDate()}일 하루 종일`,
			);
			expect(scheduleItem).toBeInTheDocument();
		});
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
