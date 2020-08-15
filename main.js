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

     let weatherName = document.getElementById('description')
     if(weatherName.textContent =='Haze'){
         document.body.style.backgroundImage= 'url(images/haze.jpg)'
     
     }
     if(weatherName.textContent =='Clouds'){
         document.body.style.backgroundImage= 'url(images/cloud.jpg)' 
        
     }
     if(weatherName.textContent =='Clear'){
         document.body.style.backgroundImage= 'url(images/clear.jpeg)' 
     }
     if(weatherName.textContent =='Rain'){
         document.body.style.backgroundImage= 'url(images/rain.jpg)'  
     }
     if(weatherName.textContent =='Snow'){
         document.body.style.backgroundImage= 'url(images/snow.jpg)'  
     }
     if(weatherName.textContent =='Thunderstorm'){
         document.body.style.backgroundImage= 'url(images/thunderstorm.jpg)'; 
     }
     if(weatherName.textContent =='drizzle'){
         document.body.style.backgroundImage= 'url(images/drizzle.jpg)'; 
     }
     if(weatherName.textContent =='light rain'){
         document.body.style.backgroundImage= 'url(images/light_rain.jpg)'; 
     }
     if(weatherName.textContent =='scattered clouds'){
         document.body.style.backgroundImage= 'url(images/scattered_clouds.jpg)'; 
     }
     if(weatherName.textContent =='clear sky'){
         document.body.style.backgroundImage= 'url(images/clear_sky.jpg)'; 
     }
     if(weatherName.textContent =='broken clouds'){
         document.body.style.backgroundImage= 'url(images/broken_clouds.jpg)'; 
     }
     if(weatherName.textContent =='moderate rain'){
         document.body.style.backgroundImage= 'url(images/moderate_rain.jpg)'; 
     }
     console.log(data);
 }