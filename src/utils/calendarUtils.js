import customFetch from "@/components/Base/BaseAxios";

// 리스트(주마다 보기)로 진행했을 떄 보여줄 첫 일요일을 계산합니다.
export const getFirstDateOfWeek = (year, month, week) => {
	const firstDateOfMonth = new Date(year, month - 1);
	const firstDayOfMonth = firstDateOfMonth.getDay();
	firstDateOfMonth.setDate(
		firstDateOfMonth.getDate() - firstDayOfMonth + 7 * (week - 1),
	);
	return firstDateOfMonth.getDate();
};

// currentWeek 초기화를 위해 현재 몇 주차인지 계산합니다.
export const getCurrentWeek = () => {
	const today = new Date();
	const date = today.getDate();
	const day = today.getDay(); // 0~6;
	const firstDateOfWeek = date - day;
	const currentWeekNum = Math.ceil((firstDateOfWeek - 1) / 7) + 1;
	return currentWeekNum;
};

export const getIsAllDay = (startDate, endDate) => {
	if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
		throw new Error("startDate와 endDate는 모두 Date 객체여야 합니다.");
	}
	return (
		new Date(startDate.setDate(startDate.getDate() + 1)).toDateString() ===
			endDate.toDateString() &&
		!endDate.getHours() &&
		!endDate.getMinutes()
	);
};

export const getSchedule = async (
	scheduleId,
	onFulfilled,
	groupId = null,
	isGroup = false,
) => {
	if (typeof onFulfilled !== "function") {
		throw new Error("onFullfilled 이벤트 리스너가 필요합니다.");
	}
	if (isGroup) {
		if (!groupId) {
			throw new Error("조회하려는 group의 Id가 필요합니다.");
		}
	}
	try {
		const response = await customFetch.get(
			`api/${
				isGroup && groupId ? `group/${groupId}` : "user"
			}/calendar/${scheduleId}`,
		);
		onFulfilled(response.data);
	} catch (error) {
		console.log(error);
	}
};
