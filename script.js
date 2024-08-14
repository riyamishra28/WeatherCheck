const searchCity = async() => {

   // const city = document.getElementById('city-input').value;
   const city = document.getElementById('city-input').value;
    //console.log(city);
    const data = await fetchWeatherData(city);
    ShowData(data);
}
  

const fetchWeatherData = async (city) => {
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'b75bb28c0cmshbd5f237b3a35b85p1fbae8jsnc531f7b8e6ba',
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      const JsonResponse =  JSON.parse(result);

      return JsonResponse;
       /* const LatLong = JsonResponse.coord;
      const mainObj = JsonResponse.main;
      const temperature = mainObj.temp;
      const feelsLike = mainObj.feels_like;
      const minTemperature = mainObj.temp_min;
      const maxTemperature = mainObj.temp_max; 
      */


      //console.log(JsonResponse);
      //console.log(LatLong);
      //console.log(temperature);
    } catch (error) {
      console.error(error);
    }
};



ShowData = (data) => {
   // const weatherData = fetchWeatherData();
    document.getElementById("city-name").innerText = data.name;
    document.getElementById("weather-type").innerText = data.weather[0].main;
    document.getElementById("temp").innerText = data.main.temp;
    document.getElementById("min-temp").innerText = data.main.temp_min;
    document.getElementById("max-temp").innerText = data.main.temp_max;
  }



