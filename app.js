 //http://api.weatherapi.com/v1/current.json?key=a2a3c11ddc1e4a7c95b190919252801&q=mumbai&aqi=

 const city=document.querySelector(".city");
 const about_city=document.querySelector(".a_city")
 const targetTemperature=document.querySelector("#temp");
 const cityHumidity=document.querySelector("#Humidity");
 const feel =document.querySelector("#feel");
 const cityRegion =document.querySelector("#region");
 const windSpeed=document.querySelector("#wspeed");
 const windDirection=document.querySelector("#wdirection");
 const C_latitude=document.querySelector("#lat");
 const C_longitude=document.querySelector("#lon");
 const cityPressure= document.querySelector("#Pressure");
 const cityDate=document.querySelector("#date");
 const cityTime=document.querySelector("#time");
 const cityCountry=document.querySelector("#Country");
 const cityCondition=document.querySelector("#condition");
 const search=document.querySelector("#search_area");
 const form =document.querySelector(".d-flex");
 form.addEventListener('submit',searchForLocation);
 let target;

 function searchForLocation(e){
	e.preventDefault()
	target =search.value;
	getData(target);
}

const getData=async(targetplace)=>{
	let url=`http://api.weatherapi.com/v1/current.json?key=(your key)&q=${targetplace}&aqi=`

	const response= await fetch(url);
	const data = await response.json();
	console.log(data);
	let region = data.location.region;
	let temperature =data.current.temp_c;
	let feelslike=data.current.feelslike_c;
	let humidity = data.current.humidity;
	let Wspeed = data.current.wind_kph;
	let wdirection=data.current.wind_dir;
    let pressure=data.current.pressure_mb;
	let latitude=data.location.lat;
	let longitude=data.location.lon;
	let localTime =data.location.localtime;
    let Country=data.location.country;
	let condition =data.current.condition.text;
	
 updateValues(temperature,feelslike,humidity,Wspeed,wdirection,
	        pressure,region,latitude,longitude,localTime,Country,condition,target);
	
}


const updateValues =(temperature,feelslike,humidity,Wspeed,wdirection,
	                 pressure,region,latitude,longitude,localTime,Country,condition,target)=>
{
	targetTemperature.innerText =temperature;
	feel.innerText=feelslike;
	cityHumidity.innerText=humidity;
    windSpeed.innerText=Wspeed;
	windDirection.innerText=wdirection;
    cityRegion.innerText= region;
	cityPressure.innerText=pressure;
	C_latitude.innerText=latitude;
	C_longitude.innerText=longitude;

	let splitDate =localTime.split(" ")[0];
	let spliTime=localTime.split(" ")[1];
	cityDate.innerText=splitDate;
	cityTime.innerText=spliTime;

	cityCountry.innerText=Country;
	cityCondition.innerText=condition;
	city.innerText=target;
	about_city.innerText=target;
}

let target2="Mumbai";
const m_temp=document.querySelector("#m_temp");
const m_feel=document.querySelector("#m_feel");
const m_hum=document.querySelector("#m_hum");
const m_pre=document.querySelector("#m_pre");
const m_ws=document.querySelector("#m_ws");
const m_cond=document.querySelector("#m_wd")

let target3="kolkata";
const k_temp=document.querySelector("#k_temp");
const k_feel=document.querySelector("#k_feel");
const k_hum=document.querySelector("#k_hum");
const k_pre=document.querySelector("#k_pre");
const k_ws=document.querySelector("#k_ws");
const k_cond=document.querySelector("#k_wd")

let target4="Delhi,India";
const d_temp=document.querySelector("#d_temp");
const d_feel=document.querySelector("#d_feel");
const d_hum=document.querySelector("#d_hum");
const d_pre=document.querySelector("#d_pre");
const d_ws=document.querySelector("#d_ws");
const d_cond=document.querySelector("#d_wd")

let target5="Chennai";
const c_temp=document.querySelector("#c_temp");
const c_feel=document.querySelector("#c_feel");
const c_hum=document.querySelector("#c_hum");
const c_pre=document.querySelector("#c_pre");
const c_ws=document.querySelector("#c_ws");
const c_cond=document.querySelector("#c_wd")

// for Mumbai weather --->
const getData2=async(constantPlace)=>{
	let url=`http://api.weatherapi.com/v1/current.json?key=(your key)&q=${targetplace}&aqi=`

	const response= await fetch(url);
	const data = await response.json();
	console.log(data);
	
	let temperature2 =data.current.temp_c;
	let feelslike2=data.current.feelslike_c;
	let humidity2 = data.current.humidity;
	let Wspeed2 = data.current.wind_kph;
    let pressure2=data.current.pressure_mb;
	let condition2 =data.current.condition.text;
	
 updateValues2(temperature2,feelslike2,humidity2,Wspeed2,
	        pressure2,condition2);
	
}


const updateValues2 =(temperature,feelslike,humidity,Wspeed,
	                 pressure,condition)=>
{
	m_temp.innerText =temperature+"℃";
	m_feel.innerText=feelslike+"℃";
	m_hum.innerText=humidity+" %";
    m_ws.innerText=Wspeed+" Km/H";
	m_pre.innerText=pressure+" MB";
	m_cond.innerText=condition;
}
getData2(target2);

// for Kolkata weather ----->
const getData3=async(constantPlace)=>{
	let url=`http://api.weatherapi.com/v1/current.json?key=(your key)&q=${targetplace}&aqi=`

	const response= await fetch(url);
	const data = await response.json();
	console.log(data);
	
	let temperature2 =data.current.temp_c;
	let feelslike2=data.current.feelslike_c;
	let humidity2 = data.current.humidity;
	let Wspeed2 = data.current.wind_kph;
    let pressure2=data.current.pressure_mb;
	let condition2 =data.current.condition.text;
	
 updateValues3(temperature2,feelslike2,humidity2,Wspeed2,
	        pressure2,condition2);
	
}


const updateValues3 =(temperature,feelslike,humidity,Wspeed,
	                 pressure,condition)=>
{
	k_temp.innerText =temperature+"℃";
	k_feel.innerText=feelslike+"℃";
	k_hum.innerText=humidity+" %";
    k_ws.innerText=Wspeed+" Km/H";
	k_pre.innerText=pressure+" MB";
	k_cond.innerText=condition;
}
getData3(target3);

// for Delhi weather --->
const getData4=async(constantPlace)=>{
	let url=`http://api.weatherapi.com/v1/current.json?key=(your key)&q=${targetplace}&aqi=`

	const response= await fetch(url);
	const data = await response.json();
	console.log(data);
	
	let temperature2 =data.current.temp_c;
	let feelslike2=data.current.feelslike_c;
	let humidity2 = data.current.humidity;
	let Wspeed2 = data.current.wind_kph;
    let pressure2=data.current.pressure_mb;
	let condition2 =data.current.condition.text;
	
 updateValues4(temperature2,feelslike2,humidity2,Wspeed2,
	        pressure2,condition2);
	
}


const updateValues4=(temperature,feelslike,humidity,Wspeed,
	                 pressure,condition)=>
{
	d_temp.innerText =temperature+"℃";
	d_feel.innerText=feelslike+"℃";
	d_hum.innerText=humidity+" %";
    d_ws.innerText=Wspeed+" Km/H";
	d_pre.innerText=pressure+" MB";
	d_cond.innerText=condition;
}
getData4(target4);

// for chennai weather --->
const getData5=async(constantPlace)=>{
	let url=`http://api.weatherapi.com/v1/current.json?key=(your key)&q=${targetplace}&aqi=`

	const response= await fetch(url);
	const data = await response.json();
	console.log(data);
	
	let temperature2 =data.current.temp_c;
	let feelslike2=data.current.feelslike_c;
	let humidity2 = data.current.humidity;
	let Wspeed2 = data.current.wind_kph;
    let pressure2=data.current.pressure_mb;
	let condition2 =data.current.condition.text;
	
 updateValues5(temperature2,feelslike2,humidity2,Wspeed2,
	        pressure2,condition2);
	
}


const updateValues5=(temperature,feelslike,humidity,Wspeed,
	                 pressure,condition)=>
{
	c_temp.innerText =temperature+"℃";
	c_feel.innerText=feelslike+"℃";
	c_hum.innerText=humidity+" %";
    c_ws.innerText=Wspeed+" Km/H";
	c_pre.innerText=pressure+" MB";
	c_cond.innerText=condition;
}
getData5(target5);

