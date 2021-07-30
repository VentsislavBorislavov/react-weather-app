function importAll(r) {
	let images = {};
	r.keys().map((item, index) => {
		images[item.replace('./', '')] = r(item);
	});
	return images;
}

export const icons = importAll(require.context('../images/icons', false, /\.png$/));

const getIcon = (iconNum) => {
	return icons[`${iconNum}-s.png`].default;
};

export default getIcon;
