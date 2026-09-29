

const cityname = document.getElementById("cityname");
const button = document.getElementById("searchcountry");
const  cityName=document.getElementById("name");
const citytime=document.getElementById("time");
const citytemp=document.getElementById("temp");
async function getData(cityname) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=116667b1c7da4c88a0930919262308&q=${cityname}&aqi=yes`)
    return await promise.json();

}



button.addEventListener("click", async() => {
    const value = cityname.value;   
    const resuilt =  await getData(value)
    console.log(resuilt);
    cityName.innerText=
    citytime.innerText=resuilt.location.localtime;
    citytemp.innerText=resuilt.current.temp_c;
    cityName.innerText=resuilt.location.name;
    cityName.innerText = resuilt.location.name;
});
console.log("ye file chall rahe ha ya nhe");

