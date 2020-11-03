import axios from "axios";

async function fetchWeather(city) {
	try {
		const { data } = await axios.get(
			`http://api.openweathermap.org/data/2.5/weather?q=${
				typeof city === "undefined" || city === "" ? "Chennai" : city
			}&units=metric&appid=cf92f639464b5f92c6f6171606449d3f`
		);
		return data;
	} catch (err) {
		console.log(err);
	}
}

export default fetchWeather;
