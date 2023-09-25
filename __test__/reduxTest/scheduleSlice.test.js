import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import { VIEW_TYPE } from "@/constants/calendarConstants.js";
import { getCurrentWeek } from "@/utils/calendarUtils";

import { createSchedule } from "../../src/features/schedule/schedule-service.js";
import { server } from "../__mocks__/msw/server.js";

const mockStore = configureMockStore([thunk]);

const byweekdayWithoutRecur = {
	SU: false,
	MO: false,
	TU: false,
	WE: false,
	TH: false,
	FR: false,
	SA: false,
};

const byweekdayWithRecur = {
	...byweekdayWithoutRecur,
	SU: true,
};

jest.mock("react-toastify", () => ({
	toast: {
		success: jest.fn(),
	},
}));

describe("schedule slice", () => {
	let store;

	beforeEach(() => {
		store = mockStore({
			schedule: {
				nonRecSchedules: [],
				recSchedules: [],
				todaySchedules: [],
				schedulesForTheWeek: [],
				month: new Date().getMonth() + 1,
				year: new Date().getFullYear(),
				week: getCurrentWeek(),
				currentView: VIEW_TYPE.DAY_GRID_MONTH,
				isLoading: false,
			},
		});
	});

	beforeAll(() => server.listen());
	afterEach(() => server.resetHandlers());
	afterAll(() => server.close());

	it("should handle createSchedule success with recurrence", async () => {
		const mockPayload = {
			schedule: {
				title: "test-title",
				details: "test-content",
				startDate: "2023-05-06",
				startTime: "09:00",
				endDate: "2023-05-07",
				endTime: "17:00",
				recurrence: 1,
				freq: "WEEKLY",
				interval: "",
				byweekday: byweekdayWithRecur,
				until: "2026-01-05",
				isAllDay: false,
				notification: false,
			},
		};

		const createResponse = await store
			.dispatch(createSchedule(mockPayload.schedule))
			.unwrap();
		expect(createResponse).toEqual({
			message: "Successfully create user schedule",
		});

		await store.dispatch(createSchedule(mockPayload.schedule)).unwrap();

		const actions = store.getActions();
		expect(actions[0].type).toEqual("schedule/createSchedule/pending");
		expect(actions[1].type).toEqual("schedule/createSchedule/fulfilled");
		expect(actions[2].type).toEqual("schedule/createSchedule/pending");
	});

	it("should handle createSchedule success without recurrence", async () => {
		const mockPayload = {
			schedule: {
				title: "test-title",
				content: "test-content",
				startDate: "2023-05-06",
				startTime: "09:00",
				endDate: "2023-05-07",
				endTime: "17:00",
				freq: "NONE",
				interval: "",
				byweekday: byweekdayWithoutRecur,
				until: "",
				isAllDay: false,
				notification: false,
			},
		};

		const createResponse = await store
			.dispatch(createSchedule(mockPayload.schedule))
			.unwrap();
		expect(createResponse).toEqual({
			message: "Successfully create user schedule",
		});
		await store.dispatch(createSchedule(mockPayload.schedule)).unwrap();

		const actions = store.getActions();
		expect(actions[0].type).toEqual("schedule/createSchedule/pending");
		expect(actions[1].type).toEqual("schedule/createSchedule/fulfilled");
		expect(actions[2].type).toEqual("schedule/createSchedule/pending");
	});
});
