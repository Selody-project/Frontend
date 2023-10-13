import moment from "moment";

import { checkIsAlldaySchedule } from "@/utils/calendarUtils";
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
	interval,
}) => {
	const todayStartDateTime = new Date();
	const todayEndDateTime = new Date();
	todayStartDateTime.setHours(0, 0, 0, 0);
	todayEndDateTime.setHours(0, 0, 0, 0);
	todayEndDateTime.setDate(todayEndDateTime.getDate() + 1);
	const requestStartDateTime = todayStartDateTime.toISOString();
	const requestEndDateTime = todayEndDateTime.toISOString();
	const startDateTime = convertToUTC(startDate, startTime);
	const endDateTime = isAllDay
		? new Date(`${startDate}T23:59:59.999`).toISOString()
		: convertToUTC(endDate, endTime);
	const untileDateTime = until ? convertToUTC(until, "00:00") : null;
	const weekNumGap =
		new Date(startDateTime).getDay() - new Date(startDateTime).getUTCDay();

	byweekday =
		byweekday.length > 0
			? byweekday.map((weekNumInHere) => weekNumInHere - weekNumGap)
			: null;

	return {
		requestStartDateTime,
		requestEndDateTime,
		title,
		content,
		startDateTime,
		endDateTime,
		recurrence: Number(freq !== "NONE"),
		freq: freq !== "NONE" ? freq.replace("_N", "") : null,
		interval: interval || null,
		byweekday,
		until: untileDateTime,
	};
};

export const convertScheduleDataToFormValue = ({
	id,
	userId,
	title,
	content,
	startDateTime,
	endDateTime,
	freq,
	interval,
	byweekday,
	until,
}) => {
	const startDate = moment(startDateTime).format("YYYY-MM-DD");
	const startTime = moment(startDateTime).format("HH:mm");
	const endDate = moment(endDateTime).format("YYYY-MM-DD");
	const endTime = moment(endDateTime).format("HH:mm");
	const isAllDay = checkIsAlldaySchedule(startDateTime, endDateTime);
	until &&= moment(until).format("YYYY-MM-DD");
	const weekNumGap =
		new Date(startDateTime).getDay() - new Date(startDateTime).getUTCDay();

	byweekday =
		byweekday?.length > 0
			? byweekday.map((UTCWeekNum) => UTCWeekNum + weekNumGap)
			: [];

	return {
		id,
		userId,
		title,
		content,
		startDate,
		startTime,
		endDate,
		endTime,
		freq: freq ? `${freq}${interval > 1 ? "_N" : ""}` : "NONE",
		interval: interval || "",
		byweekday,
		until: until || "",
		isAllDay,
	};
};
