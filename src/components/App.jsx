import React, { useState, useEffect } from "react";

import Input from "./Input";
import DisplayCard from "./DisplayCard";
import Footer from "./Footer";

import fetchWeather from "../api/api";

const App = () => {
	const [weatherData, setWeatherData] = useState({});
	const [query, setQuery] = useState();

	useEffect(() => {
		const getWeatherData = async () => {
			const data = await fetchWeather(query);
			setWeatherData(data);
		};

		getWeatherData();
	}, [query]);

	return (
		<div className="app">
			<main>
				<Input
					getInput={(value) => {
						setQuery(value);
					}}
				/>
				{typeof weatherData.main !== "undefined" ? (
					<DisplayCard data={weatherData} />
				) : (
					<h1>Cannot find detail for {query}</h1>
				)}
				<Footer />
			</main>
		</div>
	);
};

export default App;
