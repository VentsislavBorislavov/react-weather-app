export const getTime = (fDay) => {
	const indexOfT = fDay.indexOf('T') + 1;
	const time = fDay.slice(indexOfT, indexOfT + 5);
	return time;
};

const days = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Sep', 'Nov', 'Dec' ];

export const formatDate = (fcastDay) => {
	const date = new Date(fcastDay * 1000);
	const day = date.getDay();
	const month = date.getMonth();
	const monthDate = date.getDate();
	return `${days[day]}, ${months[month]} ${monthDate}`;
};
