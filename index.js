let temperature = document.querySelector('.temp');
let city = document.querySelector('.city');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');
let searchbox = document.querySelector('.search input');
let searchbutton = document.querySelector('.search button');
let weth = document.querySelector('.weather');
searchbutton.addEventListener('click', ()=>{
    weather(searchbox.value);
})


let weathericone = document.querySelector('.weathericon');

async function weather(tosrc){
    const getdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${tosrc}&appid=${"da7fcfac8bffd01e83fcd97fd91d4c9e"}&units=metric`);
    const structureddata = await getdata.json();
    let temp_data = `${structureddata?.main?.temp?.toFixed(2)}`;
    let wind_data = `${structureddata?.wind?.speed?.toFixed(2)}`;
    let humidity_data = `${structureddata?.main?.humidity?.toFixed(2)}`;
    let city_data = `${structureddata?.name}`;

    temperature.innerHTML = temp_data + '°C';
    wind.innerHTML = wind_data;
    humidity.innerHTML = humidity_data;
    city.innerHTML = city_data;

    let conditions = `${structureddata?.weather[0]?.main}`;
    if(conditions == 'Clear'){
        weathericone.src = "clearsky.png";
    }
    else if(conditions == 'Clouds'){
        weathericone.src = "cloudysky.png";
    }
    else if(conditions == 'Rain'){
        weathericone.src = "rainysky.png";
    }
    else if(conditions == 'Drizzle'){
        weathericone.src = "drizzlesky.png";
    }

    weth.style.display = 'block';
}

document.addEventListener("contextmenu" , (e)=>{
    e.preventDefault();
} , false);

