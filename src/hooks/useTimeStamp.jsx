import { format, formatDistanceToNowStrict } from "date-fns";
import { ko } from "date-fns/locale";

export const useTimeStamp = (date) => {
	const now = new Date();
	const givenDate = new Date(date);
	const diff = now - givenDate;
	if (diff < 1000 * 60) {
		return "방금 전";
	}
	if (diff < 1000 * 60 * 60 * 24 * 7) {
		const distanceString = formatDistanceToNowStrict(givenDate, {
			addSuffix: true,
			locale: ko,
		});
		return distanceString;
	}
	return format(givenDate, "YYYY년 M월 D일");
};
