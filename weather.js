 const COORDS = 'coords';
 const API_KEY = "36037a3f019b476555ade14f879e49d3";
 const weather = document.querySelector(".js-weather");

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${place}, ${temp}`
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
} 
function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log("can not access geo location");
}

 function askForCoords(){
     navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError );
 }
 function loadCoords(){
   const loadedCoords = localStorage.getItem(COORDS) ;
   if(loadedCoords === null){
    askForCoords();
   }else{
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
   }
 }

 function init(){
    loadCoords();
 }

 init();