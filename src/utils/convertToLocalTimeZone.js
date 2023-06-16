import moment from "moment";

export function convertToLocalTimezone(scheduleList) {
	scheduleList.forEach((schedule) => {
		const start = new Date(schedule.startDateTime);
		schedule.startDateTime = `${moment(start).format(
			"YYYY-MM-DDTHH:mm:ss.SSS",
		)}Z`;

		const end = new Date(schedule.endDateTime);
		schedule.endDateTime = `${moment(end).format("YYYY-MM-DDTHH:mm:ss.SSS")}Z`;
	});
	return scheduleList;
}

export function convertRecurrenceToLocalTimezone(recurrenceScheduleList) {
	recurrenceScheduleList.forEach((schedule) => {
		const until = new Date(schedule.until);
		schedule.until = `${moment(until).format("YYYY-MM-DDTHH:mm:ss.SSS")}Z`;
		schedule.recurrenceDateList.forEach((date) => {
			const start = new Date(date.startDateTime);
			date.startDateTime = `${moment(start).format(
				"YYYY-MM-DDTHH:mm:ss.SSS",
			)}Z`;

			const end = new Date(date.endDateTime);
			date.endDateTime = `${moment(end).format("YYYY-MM-DDTHH:mm:ss.SSS")}Z`;
		});
	});
	return recurrenceScheduleList;
}
