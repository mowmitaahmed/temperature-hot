const api = {
    key: "60b1a7d7781f72bb3381f12e70caee63",
    url: "https://api.openweathermap.org/data/2.5/"
}
const searchBtn = document.getElementById('searchBtn');
const searchBox = document.getElementById('searchBox');
searchBtn.addEventListener('click', function () {
    getResults(searchBox.value);
    console.log(searchBox.value);
})

function getResults(query) {
    fetch(`${api.url}weather?q=${query}&appid=${api.key}`)
    .then(res => res.json())
    .then(data => displayResults(data));
}
 function displayResults(data) {
     const weatherIcon = data.weather[0].icon;
     const city = data.name;
     const country = data.sys.country;
     const temperature = (data.main.temp) - 273.15;
     const description = data.weather[0].description;
     document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
     document.getElementById('address').innerText = `${city}, ${country}`;
     document.getElementById('temperature').innerText = `${Math.round(temperature)}`;
     document.getElementById('description').innerText = description;
     console.log(data);
 }