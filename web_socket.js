// For the web socket data to come

const myInterval = setInterval(weather, 1000);

function weather(){
    const weather_types = ["Sunny", "Rainy", 
    "Thundering", "Foggy", "Partly Clousdy",
     "Windy", "Cloudy", "Sprinkling", "Snowing"]
     const randomIndex = Math.floor(Math.random()* weather_types.length);
     const random_weather = weather_types[randomIndex];
     document.getElementById("w").innerHTML = random_weather;
}

function ChangeWeather() {
    clearInterval(myInterval);
}