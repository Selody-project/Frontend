import { rest } from "msw";

const BASE_URL = "http://localhost:8000";

export const handlers = [
	rest.post(`${BASE_URL}/api/user/calendar`, (req, res, ctx) => {
		return res(
			ctx.status(201),
			ctx.json({ message: "Successfully create user schedule" }),
		);
	}),
];
