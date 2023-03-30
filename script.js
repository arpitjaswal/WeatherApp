const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b592f652camshc73979bc534929ap15e3b3jsn1e8238495f87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));