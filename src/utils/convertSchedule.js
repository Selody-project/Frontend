import convertToUTC from "@/utils/convertToUTC";

export const convertScheduleFormValueToData = ({
	title,
	content,
	startDate,
	startTime,
	endDate,
	endTime,
	freq,
	byweekday: byweekdayObj,
	until,
	isAllDay,
}) => {
	const startDateTime = convertToUTC(startDate, startTime);
	const endDateTime = isAllDay
		? new Date(`${startDate}T23:59:59.999`)
		: convertToUTC(endDate, endTime);
	const untileDateTime = until ? convertToUTC(until, "00:00") : null;

	const byweekdayEntries = Object.entries(byweekdayObj);
	const byweekday =
		byweekdayEntries
			.filter(([, value]) => value)
			.map(([key]) => key)
			.join() || null;
	return {
		title,
		content,
		startDateTime,
		endDateTime,
		recurrence: Number(freq !== "NONE"),
		freq: freq === "NONE" ? null : freq,
		interval: freq === "NONE" ? null : 1,
		byweekday,
		until: untileDateTime,
	};
};

// export const convertScheduleDataToState = ({
// 	id,
// 	userId,
// 	title,
// 	content,
// 	startDateTime,
// 	endDateTime,
// 	recurrence,
// 	freq,
// 	interval,
// 	byweekday,
// 	until,
// }) => {
//     return {
//         id, userId, title, content,
//     }
// };
