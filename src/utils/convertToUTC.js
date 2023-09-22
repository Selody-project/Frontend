const convertToUTC = (date, time) => {
	const localDateTime = new Date(`${date}T${time}:00`);
	const utcDateTime = localDateTime.toISOString();
	return utcDateTime;
};

export const convertFromUTC = (dateTime) => {
	const date = dateTime.toString().split("T")[0];
	const time = dateTime.toString().split("T")[1];

	return {
		date,
		time,
	};
};

export const generateStartDateTime = (year, month) => {
	const date = new Date(year, month - 1, 1);

	return date.toISOString();
};

export const generateEndDateTime = (year, month) => {
	const date = new Date(year, month, 0);

	return date.toISOString();
};

export default convertToUTC;
