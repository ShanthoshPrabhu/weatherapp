
let weather = {
    fetchWeather: function(city) {
        const api = ` https://api.openweathermap.org/data/2.5/weather?q=   ${city}  &units=metric&appid=ee9b807942d7c9dd1092a2438f85aeeb `
        fetch ( api)
        .then((response) => {
           return response.json();
        })
        .then(data =>this.displayWeather(data));
    },
    displayWeather : function (data) {
       const {name} = data;
       const { description} = data.weather[0];
       const {temp , humidity}= data.main;
       const {speed} = data.wind;
       console.log(name,icon,description,temp)

       document.querySelector('.city').textContent =  name ;
       
       document.querySelector('.temp').innerText =  temp + " °C"  ;
       document.querySelector(".info").innerText = description ;
       document.querySelector(".humidity").innerText = " Humidity :" + humidity + " %";
       document.querySelector(".wind").innerText = " Wind speed :" + speed + " km/h";
       
    },
    search : function() {
        this.fetchWeather(document.querySelector('.searchbar').value);
    },
}
  

document.getElementById("button").addEventListener('click', function() {
     weather.search();
     
     document.querySelector('.searchbar').value = "" ;
});

document.querySelector('.searchbar').addEventListener('keyup' ,function(e){
    if(e.keyCode === 13){
        weather.search();
        document.querySelector('.searchbar').value = "" ;
    }
 })



 