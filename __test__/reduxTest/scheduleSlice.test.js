import { rest } from "msw";
import { server } from "../__mocks__/msw/server.js";

import { store } from "../../src/store/index.js";
import { createSchedule } from "../../src/features/schedule/schedule-service.js";

const mockSchedule = {
	title: "Test title",
	details: "Test details",
	startDate: "2023-06-04",
	endDate: "2023-06-20",
	startTime: "10:00",
	endTime: "11:00",
	repeat: "None",
	notification: "None",
};

describe("schedule slice", () => {
	beforeAll(() => {
		server.use(
			rest.post("/api/user/calendar", (req, res, ctx) => {
				return res(ctx.status(500));
			}),
		);
	});

	it("handles createSchedule failure", async () => {
		const initialScheduleState = {
			schedule: [],
			isLoading: false,
		};

		expect(store.getState().schedule).toEqual(initialScheduleState);

		server.use(
			rest.post("/api/user/calendar", (req, res, ctx) => {
				return res(ctx.status(500));
			}),
		);

		await store.dispatch(createSchedule(mockSchedule));

		expect(store.getState().schedule.isLoading).toBe(false);
	});

	it("handles createSchedule success", async () => {
		const initialScheduleState = {
			schedule: [],
			isLoading: false,
		};

		expect(store.getState().schedule).toEqual(initialScheduleState);

		await store.dispatch(createSchedule(mockSchedule));

		expect(store.getState().schedule.isLoading).toBe(false);
	});
});
