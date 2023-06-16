import { rest } from "msw";

const BASE_URL = "http://localhost/back";

export const handlers = [
	rest.post(`${BASE_URL}/api/user/calendar`, (req, res, ctx) => {
		return res(
			ctx.status(201),
			ctx.json({ message: "Successfully create user schedule" }),
		);
	}),
	rest.get(`${BASE_URL}/api/user/calendar`, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				recurrenceSchedule: [
					{
						byweekday: "",
						content: "test-content11",
						freq: "DAILY",
						groupId: 1,
						id: 11,
						interval: 1,
						recurrence: 1,
						recurrenceDateList: [
							{
								endDateTime: "2023-04-01T13:00:00.000Z",
								startDateTime: "2023-04-01T12:00:00.000Z",
							},
							{
								endDateTime: "2023-04-02T13:00:00.000Z",
								startDateTime: "2023-04-02T12:00:00.000Z",
							},
						],
						title: "test-title11",
						until: "2023-04-05T14:00:00.000Z",
					},
				],
				nonRecurrenceSchedule: [
					{
						id: 1,
						content: "test-content1",
						endDateTime: "2023-05-15T23:59:59.000Z",
						recurrence: 0,
						startDateTime: "2023-02-03T00:00:00.000Z",
						title: "test-title1",
					},
				],
			}),
		);
	}),
];
