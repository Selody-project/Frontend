// 리스트(주마다 보기)로 진행했을 떄 보여줄 첫 일요일을 계산합니다.
export const getFirstDateOfWeek = (year, month, week) => {
	const firstDateOfMonth = new Date(year, month - 1);
	const firstDayOfMonth = firstDateOfMonth.getDay();
	firstDateOfMonth.setDate(
		firstDateOfMonth.getDate() - firstDayOfMonth + 7 * (week - 1),
	);
	return firstDateOfMonth.getDate();
};
