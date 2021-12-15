let cityEl = document.querySelector('.city__name');
let t = document.querySelector('.T');
let tempEl = document.querySelectorAll('.temp');
let timeEl = document.querySelectorAll('.time');
let icon = document.querySelectorAll('.icon');
let text = 'kiev';

let ok = document.querySelector('.ok');
let info = document.getElementById('i');

ok.addEventListener('click',()=>{
   info.style.opacity = 0;
})

cityEl.addEventListener('click',()=>{
    text = prompt('Enter Your city');
    forcast()

})
forcast()


function forcast(){
    
    
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=888d59c41b8b4baf8b1183100213011&q=${text}&days=5&aqi=no&alerts=no`)
    .then(function (resp){return resp.json()})
    .then(function(data){
        console.log(data);


        cityEl.innerHTML= data.location.name;
       let x = data.current.temp_c;
        tempEl.forEach((element,id) => {
            let t2;
            let weather;
            let x = false;

            if(id == 0){
               
                
                weather = data.current.condition.text;
                if(weather == 'Overcast'){
                    icon[id].innerHTML = `<img id='x'   src="./assets/img/icons/Archive/cloud.png" alt="">`
                    x=true;
                 }
                if(weather == 'Partly cloudy'){
                   icon[id].innerHTML = `<img id='x'  src="./assets/img/icons/Archive/Partlycloudy.png" alt="">`
                   x=true;
                }
                if(weather == 'Moderate or heavy snow showers'){
                  x=true;
                    icon[id].innerHTML = `<img id='x'  src="./assets/img/icons/Archive/snow.png" alt="">`
                 }
                 if(weather == 'Clear'){
                  x=true;
                    icon[id].innerHTML = `<img id='x' src="./assets/img/icons/Archive/sun.png" alt="">`
                 }
                 if(weather == 'Patchy rain possible'){
                  x=true;
                    icon[id].innerHTML = `<img id='x'  src="./assets/img/icons/Archive/Patchyrainpossible.png" alt="">`
                 }
                 if(weather == 'Moderate rain'){
                  x=true;
                    icon[id].innerHTML = `<img id='x'  src="./assets/img/icons/Archive/rain.png" alt="">`
                 }
                 if(weather == 'Sunny'){
                  x=true;
                    icon[id].innerHTML = `<img  id='x' src="./assets/img/icons/Archive/sun.png" alt="">`
                 }
                 if(weather == 'Heavy snow'){
                  x=true;
                    icon[id].innerHTML = `<img  id='x' src="./assets/img/icons/Archive/Heavysnow.png" alt="">`
                 }
                 if(weather == 'Light snow'){
                  x=true;
                    icon[id].innerHTML = `<img id='x'  src="./assets/img/icons/Archive/snow.png" alt="">`
                 }
                 if(x==false){
                  icon[id].innerHTML = `<img  id='x'  src="./assets/img/icons/Archive/Partlycloudy.png" alt="">`
                 }
                 

                
                element.innerHTML = data.current.temp_c+'°';

                
            }
            if(id == 1){
               x = false;
                 t2 = Math.round(element.innerHTML = data.forecast.forecastday[id].day.avgtemp_c);
               
                element.innerHTML = t2 + '°';
               
                let dat = data.forecast.forecastday[id].date.split('-')
               
                timeEl[id].innerHTML =  dat[2]

                weather = data.forecast.forecastday[id].day.condition.text
              
                if(weather == 'Partly cloudy'){
                  x=true;
                   icon[id].innerHTML = `<img id='x'  src="./assets/img/icons/Archive/Partlycloudy.png" alt="">`
                }
                if(weather == 'Moderate or heavy snow showers'){
                  x=true;
                    icon[id].innerHTML = `<img  id='x' src="./assets/img/icons/Archive/snow.png" alt="">`
                 }
                 if(weather == 'Overcast'){
                  x=true;
                    icon[id].innerHTML = `<img  id='x' src="./assets/img/icons/Archive/cloud.png" alt="">`
                 }
                 if(weather == 'Clear'){
                  x=true;
                    icon[id].innerHTML = `<img  id='x' src="./assets/img/icons/Archive/sun.png" alt="">`
                 }
                 if(weather == 'Patchy rain possible'){
                  x=true;
                    icon[id].innerHTML = `<img  id='x' src="./assets/img/icons/Archive/Patchyrainpossible.png" alt="">`
                 }
                 if(weather == 'Moderate rain'){
                  x=true;
                    icon[id].innerHTML = `<img id='x'  src="./assets/img/icons/Archive/rain.png" alt="">`
                 }
                 if(weather == 'Sunny'){
                  x=true;
                    icon[id].innerHTML = `<img id='x'  src="./assets/img/icons/Archive/sun.png" alt="">`
                 }
                 if(weather == 'Heavy snow'){
                  x=true;
                    icon[id].innerHTML = `<img id='x'  src="./assets/img/icons/Archive/Heavysnow.png" alt="">`
                 }
                 if(weather == 'Light snow'){
                  x=true;
                    icon[id].innerHTML = `<img id='x'  src="./assets/img/icons/Archive/snow.png" alt="">`
                 }
                 if(x==false){
                  icon[id].innerHTML = `<img  id='x'  src="./assets/img/icons/Archive/Partlycloudy.png" alt="">`
                 }



            }

            if(id == 2){
               x = false;
                t2 = Math.round(element.innerHTML = data.forecast.forecastday[id].day.avgtemp_c);
              
               element.innerHTML = t2 + '°';
              
               let dat = data.forecast.forecastday[id].date.split('-')
              
               timeEl[id].innerHTML =  dat[2]
               ////
               weather = data.forecast.forecastday[id].day.condition.text
               
               if(weather == 'Partly cloudy'){
                  x=true;
                  icon[id].innerHTML = `<img  id='x'  src="./assets/img/icons/Archive/Partlycloudy.png" alt="">`
               }
               if(weather == 'Moderate or heavy snow showers'){
                  x=true;
                   icon[id].innerHTML = `<img id='x'  src="./assets/img/icons/Archive/snow.png" alt="">`
                }
                
                if(weather == 'Overcast'){
                  x=true;
                    icon[id].innerHTML = `<img id='x'  src="./assets/img/icons/Archive/cloud.png" alt="">`
                 }
                
                 if(weather == 'Clear'){
                  x=true;
                    icon[id].innerHTML = `<img id='x'  src="./assets/img/icons/Archive/sun.png" alt="">`
                 }
                 if(weather == 'Patchy rain possible'){
                  x=true;
                    icon[id].innerHTML = `<img id='x'  src="./assets/img/icons/Archive/Patchyrainpossible.png" alt="">`
                 }
                 if(weather == 'Moderate rain'){
                  x=true;
                    icon[id].innerHTML = `<img  id='x' src="./assets/img/icons/Archive/rain.png" alt="">`
                 }
                 if(weather == 'Sunny'){
                  x=true;
                    icon[id].innerHTML = `<img  id='x' src="./assets/img/icons/Archive/sun.png" alt="">`
                 }
                 if(weather == 'Heavy snow'){
                  x=true;
                    icon[id].innerHTML = `<img  id='x' src="./assets/img/icons/Archive/Heavysnow.png" alt="">`
                 }
                 if(weather == 'Light snow'){
                  x=true;
                    icon[id].innerHTML = `<img  id='x' src="./assets/img/icons/Archive/snow.png" alt="">`
                 }
                 if(x==false){
                  icon[id].innerHTML = `<img  id='x'  src="./assets/img/icons/Archive/Partlycloudy.png" alt="">`
                 }


               ///Heavy snow
           }



           console.log(data.forecast.forecastday[id].day.condition.text);
        });



       t.innerHTML = data.current.temp_c+'°';
        console.log(x);
        
    })
    .catch(function(){

    })
}
 






