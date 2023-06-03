const convertToUTC = (date, time) => {
	const localDateTime = new Date(`${date}T${time}:00`);
	const utcDateTime = localDateTime.toISOString().split(".")[0] + ".000Z";
	return utcDateTime;
};

export default convertToUTC;
