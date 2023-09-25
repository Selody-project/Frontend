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

export default convertToUTC;
