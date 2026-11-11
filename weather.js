document.getElementById("myform").addEventListener('submit',(e)=>{
    e.preventDefault()
    var city=document.getElementById('cityname').value;
    // alert(city)
    var apikey="73e913560b52855c0a82a806ba8129cf";

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
    .then((res)=>{
        console.log(res.data);
        document.getElementById("weather-result").style.display = "block";
        document.getElementById("city").innerHTML = "City name is: " + res.data.name; 
         document.getElementById("temp").innerHTML = "Temperature is: " + res.data.main.temp; 
         document.getElementById("humidity").innerHTML = "Humidity is: " + res.data.main.humidity; 
         document.getElementById("pressure").innerHTML = "Pressure is: " + res.data.main.pressure; 
         document.getElementById("speed").innerHTML = "Wind speed is: " + res.data.wind.speed;
    })
    .catch((res)=>{
        console.log("Enter Valid cityname",res)
    })
    
})