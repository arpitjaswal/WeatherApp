const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b592f652camshc73979bc534929ap15e3b3jsn1e8238495f87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
	cityName.innerHTML=city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}
getWeather("Delhi");
submit.addEventListener("click", (e)=>{
	e.preventDefault();
	getWeather(city.value);
})

const getWeatherUna = (city)=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Una', options)
	.then(response => response.json())
	.then((response) => {
		una_cloud_pct.innerHTML = response.cloud_pct
		una_temp.innerHTML = response.temp
		una_feels_like.innerHTML = response.feels_like
		una_humidity.innerHTML = response.humidity
		una_min_temp.innerHTML = response.min_temp
		una_max_temp.innerHTML = response.max_temp
		una_wind_speed.innerHTML = response.wind_speed
		una_wind_degrees.innerHTML = response.wind_degrees
		una_sunrise.innerHTML = response.sunrise
		una_sunset.innerHTML = response.sunset
	})
	.catch(err => console.error(err));
}
getWeatherUna("Una");
