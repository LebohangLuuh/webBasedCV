const API_KEY = '3fdf856655a9f95735bd40fee11043e7'
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")


const getWeather = async (_city) => {
    weather.innerHTML = '<h2>Loading...<h2>'
    const url = 'https://api.openweathermap.org/data/2.5/weather?id=${_city}&appid=${API_KEY}&units=metric'
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
      weather.innerHTML = '<h2>City not found</h2>';
      return;
    }
  
    weather.innerHTML = `
      <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
      </div>
  
      <div>
        <h4>${data.main.temp} ℃</h4>
        <h2>${data.weather[0].main}</h2>
      </div>
    `;
  };

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value)
        event.preventDefault();

    }
)


