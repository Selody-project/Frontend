export const useTimeStamp = (timestamp) => {
	const timeElapsed = Math.floor((new Date() - new Date(timestamp)) / 1000);

	if (timeElapsed < 60) {
		return `방금 전`;
	}
	if (timeElapsed < 60 * 60) {
		const minutes = Math.floor(timeElapsed / 60);
		return `${minutes}분 전`;
	}
	if (timeElapsed < 60 * 60 * 24) {
		const hours = Math.floor(timeElapsed / (60 * 60));
		return `${hours}시간 전`;
	}
	if (timeElapsed < 60 * 60 * 24 * 7) {
		const days = Math.floor(timeElapsed / (60 * 60 * 24));
		return `${days}일 전`;
	}
	if (timeElapsed < 60 * 60 * 24 * 7 * 4) {
		const weeks = Math.floor(timeElapsed / (60 * 60 * 24 * 7));
		return `${weeks}주 전`;
	}
	if (timeElapsed < 60 * 60 * 24 * 7 * 4 * 2) {
		const months = Math.floor(timeElapsed / (60 * 60 * 24 * 7 * 4));
		return `${months}달 전`;
	}
	return new Date(timestamp).toISOString().slice(0, 10);
};
