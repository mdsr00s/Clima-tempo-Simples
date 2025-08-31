const input = document.getElementById("cityInput");
const search = document.getElementById("searchBtn");
const result = document.getElementById("weatherResult");

const API_KEY = "71941897b4490a6909e42347134e6f38";

search.addEventListener("click", async () => {
    const city = input.value.trim();
    if (city === ""){
        alert("Digite sua cidade!");
        return;
    }

    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
        );

    if(!response.ok) {
        throw new Error("cidade não encontrada!")
    }

    const data = await response.json();

    result.innerHTML = 
    `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p> 🌡️temperatura: ${ Math.round(data.main.temp) }°C</p>
    <p> 🌤️clima: ${data.weather[0].description}</p>
    <p> 💨vento: ${data.wind.speed} km/h</p>
    `

    } catch (error) {
        result.innerHTML = `<p>${error.message}</p>`;
    }
});