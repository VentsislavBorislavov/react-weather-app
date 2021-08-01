const SunPosition = () => {
	return (
		<section className="sun-position">
			<h2>Sun Position</h2>
			<div className="info">
				<div className="container">
					<div className="arches">
						<i className="fas fa-sun sun" />
					</div>
				</div>
				<div className="time">
					<span className="rise">Rise</span>
					<span className="set">Set</span>
				</div>
			</div>
		</section>
	);
};

export default SunPosition;
