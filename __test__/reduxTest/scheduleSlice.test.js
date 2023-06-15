import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { rest } from "msw";
import { server } from "../__mocks__/msw/server.js";
import { toast } from "react-toastify";
import {
	saveSchedule,
	currentMonthFn,
	currentYearFn,
	setId,
} from "../../src/features/schedule/schedule-slice.js";
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

	beforeAll(() => {
		server.use(
			rest.post("/api/user/calendar", (req, res, ctx) => {
				return res(ctx.status(500));
			}),
		);
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("should handle createSchedule success", async () => {
		const mockPayload = { title: "Test title" };

		await store.dispatch(createSchedule(mockPayload)).unwrap();

		const actions = store.getActions();
		expect(actions[0]).toEqual(createSchedule.pending());
		expect(actions[1]).toEqual(createSchedule.fulfilled());
		expect(toast.success).toHaveBeenCalledWith("일정 추가에 성공하셨습니다!");
	});

	it("should handle createSchedule success", async () => {
		const mockPayload = { title: "Test title" };

		await store.dispatch(createSchedule(mockPayload)).unwrap();

		const actions = store.getActions();
		expect(actions[0]).toEqual(createSchedule.pending.type);
		expect(actions[1].type).toEqual(createSchedule.fulfilled.type);
		expect(toast.success).toHaveBeenCalledWith("일정 추가에 성공하셨습니다!");
	});

	it("should save schedule", () => {
		const mockPayload = { title: "Test title" };

		const newState = saveSchedule(store.getState().schedule, {
			payload: mockPayload,
		});

		expect(newState.schedule).toEqual([mockPayload]);
	});

	it("should update current month", () => {
		const mockPayload = 6;

		const newState = currentMonthFn(store.getState().schedule, {
			payload: mockPayload,
		});

		expect(newState.month).toEqual(mockPayload);
	});

	it("should update current year", () => {
		const mockPayload = 2023;

		const newState = currentYearFn(store.getState().schedule, {
			payload: mockPayload,
		});

		expect(newState.year).toEqual(mockPayload);
	});

	it("should set id", () => {
		const mockPayload = "abc123";

		const newState = setId(store.getState().schedule, {
			payload: mockPayload,
		});

		expect(newState.id).toEqual(mockPayload);
	});
});
