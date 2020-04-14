fetch('http://api.openweathermap.org/data/2.5/weather?id=293397&appid=d020f17e8b005320b0730b4ea5a8833a')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("city").innerHTML = data.name;
        document.getElementById("temperatura").innerHTML = Math.round(data.main.temp - 273) +
            '&deg';
        document.getElementById('description').innerHTML = data.weather[0].description;
        document.getElementById('weather-icon').innerHTML = `<img src = "https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    });