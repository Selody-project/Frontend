import moment from "moment";

import { getIsAllDay } from "@/utils/calendarUtils";
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
		? new Date(`${startDate}T23:59:59.999`)
		: convertToUTC(endDate, endTime);
	const untileDateTime = until ? convertToUTC(until, "00:00") : null;

	byweekday =
		byweekday.length > 0
			? byweekday.map((weekNum) => {
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
	byweekday: byweekdayStrArray,
	until,
}) => {
	const startDate = moment(startDateTime).format("YYYY-MM-DD");
	const startTime = moment(startDateTime).format("HH:mm");
	const endDate = moment(endDateTime).format("YYYY-MM-DD");
	const endTime = moment(endDateTime).format("HH:mm");
	const isAllDay = getIsAllDay(new Date(startDateTime), new Date(endDateTime));
	until &&= moment(until).format("YYYY-MM-DD");

	const byweekday = byweekdayStrArray
		? byweekdayStrArray.map((weekStr) => {
				if (weekStr === "SU") {
					return 0;
				}
				if (weekStr === "MO") {
					return 1;
				}
				if (weekStr === "TU") {
					return 2;
				}
				if (weekStr === "WE") {
					return 3;
				}
				if (weekStr === "TH") {
					return 4;
				}
				if (weekStr === "FR") {
					return 5;
				}
				if (weekStr === "SA") {
					return 6;
				}
				throw new Error("존재하지 않는 요일입니다.");
		  })
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
		byweekday: byweekday && byweekday.length > 0 ? byweekday : [],
		until: until || "",
		isAllDay,
	};
};
