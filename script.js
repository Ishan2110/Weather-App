const api = {
    key: "6f6dd128af6a5b8087cedd2e977098ff",
    base: "http://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector(".city-search");

search.addEventListener('keypress', queryset);

function queryset(event) {
    if (event.keyCode == 13)
        results(search.value);

    // console.log(search.value); // console.log(event.target.value);

}

function results(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)

    .then(weather => {
        return weather.json();
    }).then(display);

}

function display(weather) {
    console.log(weather);
    let temp = document.querySelector('#temp');
    let wind = document.querySelector('#wind');
    let hi = document.querySelector("#hi-low");
    const locationElement = document.querySelector('[data-location]');
    const statusElement = document.querySelector('[data-status]');

    temp.innerHTML = `${(weather.main.temp)}<span>°C</span>`;

    statusElement.innerHTML = weather.weather[0].main;

    wind.innerHTML = weather.wind.speed;

    hi.innerHTML = `${(weather.main.temp_min)}<span>°C</span>` + " / " + `${(weather.main.temp_max)}<span>°C</span>`;

    locationElement.innerHTML = `${weather.name}` + ", " + `${weather.sys.country}`;

    let img1 = document.querySelector(".icon-container");

    img1.innerHTML = `<img src="icons/${weather.weather[0].icon}.png"/>`;



}