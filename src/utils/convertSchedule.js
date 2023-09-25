import convertToUTC from "@/utils/convertToUTC";

export const convertScheduleFormValueToData = ({
	title,
	content,
	startDate,
	startTime,
	endDate,
	endTime,
	freq,
	byweekday,
	until,
	isAllDay,
}) => {
	const startDateTime = convertToUTC(startDate, startTime);
	const endDateTime = isAllDay
		? new Date(`${startDate}T23:59:59.999`)
		: convertToUTC(endDate, endTime);
	const untileDateTime = until ? convertToUTC(until, "00:00") : null;

	byweekday = byweekday
		.map((weekNum) => {
			if (weekNum === 0) {
				return "SU";
			}
			if (weekNum === 1) {
				return "MO";
			}
			if (weekNum === 2) {
				return "TU";
			}
			if (weekNum === 3) {
				return "WE";
			}
			if (weekNum === 4) {
				return "TH";
			}
			if (weekNum === 5) {
				return "FR";
			}
			if (weekNum === 6) {
				return "SA";
			}
			throw new Error("존재하지 않는 요일입니다.");
		})
		.toString();

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
