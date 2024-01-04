import { rest } from "msw";

const BASE_URL = "http://localhost/back";

export const handlers = [
	rest.get(`${BASE_URL}/api/user/calendar/summary`, (req, res, ctx) => {
		const startDateTime = req.url.searchParams.get("startDateTime");
		const endDateTime = new Date(
			new Date(startDateTime).setHours(23, 59, 59, 999),
		).toISOString();
		return res(
			ctx.status(200),
			ctx.json({
				schedules: [
					{
						id: 1,
						userId: 1,
						startDateTime,
						endDateTime,
						recurrence: 0,
						freq: null,
						interval: null,
						byweekday: null,
						until: null,
						isGroup: 0,
					},
				],
			}),
		);
	}),
	rest.get(`${BASE_URL}/api/user/calendar`, (req, res, ctx) => {
		const startDateTime = req.url.searchParams.get("startDateTime");
		const endDateTime = new Date(
			new Date(startDateTime).setHours(23, 59, 59, 999),
		).toISOString();
		return res(
			ctx.status(200),
			ctx.json({
				schedules: [
					{
						id: 1,
						userId: 1,
						title: "오늘오늘",
						content: "오늘 끝",
						startDateTime,
						endDateTime,
						recurrence: 0,
						freq: null,
						interval: null,
						byweekday: null,
						until: null,
						isGroup: 0,
					},
				],
			}),
		);
	}),
	// rest.post(`${BASE_URL}/api/user/calendar`, (req, res, ctx) => {
	// 	return res(
	// 		ctx.status(201),
	// 		ctx.json({ message: "Successfully create user schedule" }),
	// 	);
	// }),
	rest.get(`${BASE_URL}/api/user/calendar/:id`, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				id: req.params.id,
				userId: 1,
				title: "오늘오늘",
				content: "오늘 끝",
				startDateTime: "2023-12-14T01:55:00.000Z",
				endDateTime: "2023-12-14T05:55:00.000Z",
				recurrence: 0,
				freq: null,
				interval: null,
				byweekday: null,
				until: null,
			}),
		);
	}),
];
