import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { toast } from "react-toastify";
import {
	saveSchedule,
	currentMonthFn,
	currentYearFn,
	setId,
} from "../../src/features/schedule/schedule-slice.js";
import { server } from "../__mocks__/msw/server.js";
import { createSchedule } from "../../src/features/schedule/schedule-service.js";

const mockStore = configureMockStore([thunk]);

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
				totalSchedule: [],
				schedule: [],
				recSchedules: [],
				month: 0,
				year: 0,
				isLoading: false,
				id: null,
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
				endDate: "2023-05-07",
				startTime: "09:00",
				endTime: "17:00",
				repeat: "WEEKLY",
				untilDate: "2026-01-05",
				untilTime: "12:00",
			},
		};

		const createResponse = await store
			.dispatch(createSchedule(mockPayload.schedule))
			.unwrap();
		expect(createResponse).toEqual({
			message: "Successfully create user schedule",
		});

		const fetchResponse = await store.dispatch(createSchedule()).unwrap();

		const actions = store.getActions();
		expect(actions[0].type).toEqual("schedule/createSchedule/pending");
		expect(actions[1].type).toEqual("schedule/getSchedule/pending");
		expect(actions[2].type).toEqual("schedule/createSchedule/fulfilled");
		expect(actions[3].type).toEqual("schedule/getSchedule/fulfilled");
		expect(fetchResponse.recurrenceSchedule[0].content).toEqual(
			"test-content11",
		);
		expect(toast.success).toHaveBeenCalledWith("일정 추가에 성공하셨습니다!");
	});

	it("should handle createSchedule success without recurrence", async () => {
		const mockPayload = {
			schedule: {
				title: "test-title",
				details: "test-content",
				startDate: "2023-05-06",
				endDate: "2023-05-07",
				startTime: "09:00",
				endTime: "17:00",
				repeat: "none",
			},
		};

		const createResponse = await store
			.dispatch(createSchedule(mockPayload.schedule))
			.unwrap();
		expect(createResponse).toEqual({
			message: "Successfully create user schedule",
		});

		const fetchResponse = await store.dispatch(createSchedule()).unwrap();

		const actions = store.getActions();
		expect(actions[0].type).toEqual("schedule/createSchedule/pending");
		expect(actions[1].type).toEqual("schedule/getSchedule/pending");
		expect(actions[2].type).toEqual("schedule/createSchedule/fulfilled");
		expect(actions[3].type).toEqual("schedule/getSchedule/fulfilled");
		expect(fetchResponse.recurrenceSchedule[0].content).toEqual(
			"test-content11",
		);
		expect(toast.success).toHaveBeenCalledWith("일정 추가에 성공하셨습니다!");
	});
});
