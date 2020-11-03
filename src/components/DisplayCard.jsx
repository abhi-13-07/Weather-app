import React from "react";

const DisplayCard = ({ data }) => {
	return (
		<div className="card">
			<div className="main-text">
				<span>{data.name}</span>, <span>{data.sys.country}</span>
			</div>
			<div className="temp-container">{Math.round(data.main.temp)} &deg; C</div>
			<div className="weather-description">Sunny</div>
		</div>
	);
};

export default DisplayCard;
