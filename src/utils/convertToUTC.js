const convertToUTC = (date, time) => {
	console.log(time);
	const localDateTime = new Date(`${date}T${time}:00`);
	const utcDateTime = localDateTime.toISOString().split(".")[0];
	return utcDateTime;
};

export const convertFromUTC = (dateTime) => {
	console.log(dateTime);
	const date = dateTime.toString().split("T")[0];
	const time = dateTime.toString().split("T")[1];

	return {
		date,
		time,
	};
};

export default convertToUTC;
