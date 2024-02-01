import { rest } from "msw";
import { setupServer } from "msw/node";

import {
	deleteGroupSchedule,
	getGroupSchedule,
	getGroupScheduleSummary,
	getScheduleProposalsList,
	// getSingleGroupSchedule,
} from "./handlers/group/calendar";
import { getGroupMembers } from "./handlers/group/members";
import {
	deletePersonalSchedule,
	getSingleUserSchedule,
	getUserPersonalSchedule,
	getUserPersonalScheduleSummary,
	postPersonalSchedule,
	putPersonalSchedule,
} from "./handlers/user/calendar";
import { getUserGroup } from "./handlers/user/group";

const BASE_URL = "http://localhost/back";

export const handlers = [
	rest.get(
		`${BASE_URL}/api/user/calendar/summary`,
		getUserPersonalScheduleSummary,
	),
	rest.get(`${BASE_URL}/api/user/calendar`, getUserPersonalSchedule),
	rest.get(`${BASE_URL}/api/user/calendar/:id`, getSingleUserSchedule),
	rest.post(`${BASE_URL}/api/user/calendar`, postPersonalSchedule),
	rest.put(`${BASE_URL}/api/user/calendar/:id`, putPersonalSchedule),
	rest.delete(`${BASE_URL}/api/user/calendar/:id`, deletePersonalSchedule),

	rest.get(`${BASE_URL}/api/user/group`, getUserGroup),

	rest.get(
		`${BASE_URL}/api/group/:group_id/proposal/list`,
		getScheduleProposalsList,
	),

	rest.get(`${BASE_URL}/api/group/:group_id/calendar`, getGroupSchedule),
	rest.get(
		`${BASE_URL}/api/group/:group_id/calendar/summary`,
		getGroupScheduleSummary,
	),
	rest.delete(
		`${BASE_URL}/api/group/:group_id/calendar/api/:schedule_id`,
		deleteGroupSchedule,
	),

	rest.get(`${BASE_URL}/api/group/:group_id/members`, getGroupMembers),
	// rest.get(
	// 	`${BASE_URL}/api/group/:group_id/calendar/api/:schedule_id`,
	// 	getSingleGroupSchedule,
	// ),
];

export const server = setupServer(...handlers);
