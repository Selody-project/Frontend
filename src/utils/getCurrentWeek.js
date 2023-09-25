// currentWeek 초기화를 위해 현재 몇 주차인지 계산합니다.
const getCurrentWeek = () => {
	const today = new Date();
	const date = today.getDate();
	const day = today.getDay(); // 0~6;
	const firstDateOfWeek = date - day;
	const currentWeekNum = Math.ceil((firstDateOfWeek - 1) / 7) + 1;
	return currentWeekNum;
};

export default getCurrentWeek;
