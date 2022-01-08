let weather = {
    "apiKey" : "{YOUR_API_KEY}", //Get from openweathermap.org
    fetchWeather: function(city){
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=" + this.apiKey
            ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, feels_like, humidity} = data.main;
        console.log(name,icon,description,temp,feels_like,humidity);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".feels_like").innerText = "Feels like: " + feels_like + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});