const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const key="4312a9905b5ca28250467427ec7a0599";


let btn=document.querySelector("button");
let inp=document.querySelector("input");
let body=document.querySelector("body");

let city=document.querySelector("#city");
let temp=document.querySelector("#temp");

let visibility=document.querySelector("#visib");
let humidity=document.querySelector("#humidity");
let windspeed=document.querySelector("#windspeed");
let maxmtemp=document.querySelector("#maxmtemp");
let minmtemp=document.querySelector("#minmtemp");

let img2=document.querySelector("#img2");



let cityname="delhi";
async function vivek(){
const data= await fetch(url+`${cityname}`+`&appid=${key}`);
 var resp= await data.json();
 console.log(resp);
city.innerText=resp.name;
temp.innerText="+"+resp.main.temp+"°C";
windspeed.innerText=resp.wind.speed+"km/hr";
humidity.innerText=resp.main.humidity+"g/m3";
maxmtemp.innerText=resp.main.temp_max+"°C";
minmtemp.innerText=resp.main.temp_min+"°C";
visibility.innerText=resp.visibility+"Metres";
if(resp.main.temp>30){
    img2.src="sun.jpg";
}
else if(resp.main.temp<30&&resp.main.temp>25){
    img2.src="sunwithnormal.jpg";
}
else{
    img2.src="suneithcloud.png";
}
}

inp.addEventListener("keypress",(event)=>{
    console.log(event.code);
  
})
btn.addEventListener("click",()=>{
    cityname=inp.value;
    vivek();
})







