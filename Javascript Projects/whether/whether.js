
const apiKey = "403351bfa3b253b400c28fb3920b180d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&unit=matric&q=";

const searchBox = document.querySelector(".text");
const searchBtn = document.querySelector(".search-btn");
let whetherImage = document.querySelector(".whether-img")


async function whetherCheck(city) {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

      var data = await response.json();

      console.log(data)
     
            
            document.querySelector(".city").innerHTML = data.name;

    

      document.querySelector(".whether-info").innerHTML = Math.round(data.main.temp - 273.15) + "&deg;c";


      document.querySelector(".whether-left").innerHTML = data.main.humidity + "% " + "<br>" + "Humindity";

      document.querySelector(".whether-right").innerHTML = data.wind.speed + " " + "km/h" + "<br>" + "Wind Speed";

      if(data.weather[0].main == "Clouds"){
            whetherImage.src="images/clouds.png";
      }
      else if(data.weather[0].main == "Clear"){
            whetherImage.src ="  images/clear.png ";
      }
      else if(data.weather[0].main == "Mist"){
            whetherImage.src ="images/mist.png";
      }
      else if(data.weather[0].main == "Drizzle"){
            whetherImage.src ="images/drizzle.png";
      }
      else if(data.weather[0].main == "Rain"){
            whetherImage.src ="images/rain.png";
      }

      document.querySelector(".whether").style.display="block";
    

     



}


function enter(event){
     if(event.key === "Enter"){
      whetherCheck(searchBox.value)
     }
}
searchBtn.addEventListener("click", () => {
       whetherCheck(searchBox.value)
     
})



