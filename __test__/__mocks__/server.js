import { rest } from "msw";
import { setupServer } from "msw/node";

import {
	getSingleUserSchedule,
	getUserPersonalSchedule,
	getUserPersonalScheduleSummary,
	postPersonalSchedule,
} from "./handlers/users/calendar";

const BASE_URL = "http://localhost/back";

export const handlers = [
	rest.get(
		`${BASE_URL}/api/user/calendar/summary`,
		getUserPersonalScheduleSummary,
	),
	rest.get(`${BASE_URL}/api/user/calendar`, getUserPersonalSchedule),
	rest.get(`${BASE_URL}/api/user/calendar/:id`, getSingleUserSchedule),
	rest.post(`${BASE_URL}/api/user/calendar`, postPersonalSchedule),
];

export const server = setupServer(...handlers);
