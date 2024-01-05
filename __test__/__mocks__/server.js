import { rest } from "msw";
import { setupServer } from "msw/node";

import {
	getSingleUserSchedule,
	getUserPersonalSchedule,
	getUserPersonalScheduleSummary,
	postPersonalSchedule,
	putPersonalSchedule,
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
	rest.put(`${BASE_URL}/api/user/calendar:id`, putPersonalSchedule),
];

export const server = setupServer(...handlers);
