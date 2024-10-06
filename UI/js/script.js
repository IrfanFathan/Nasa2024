const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
const weatherLocation = "London"; // You can change this to any location

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherLocation}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        if (data.cod === 200) {
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const precipitation = data.weather[0].description;

            document.getElementById('weather-location').innerText = `Location: ${data.name}`;
            document.getElementById('weather-details').innerText = `Temperature: ${temperature} °C\nHumidity: ${humidity}%\nWind Speed: ${windSpeed} m/s\nConditions: ${precipitation}`;

            // Check for extreme weather alerts (you can customize the conditions)
            checkExtremeWeather(data);
        } else {
            document.getElementById('weather-details').innerText = 'Weather data not available.';
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function checkExtremeWeather(data) {
    const alertMessage = document.getElementById('alert-message');
    alertMessage.style.display = 'none'; // Hide the alert initially

    // Example: Checking for extreme conditions (customize as needed)
    if (data.weather[0].main === 'Thunderstorm') {
        alertMessage.innerText = '⚠️ Severe Thunderstorm Alert! Take precautions.';
        alertMessage.style.display = 'block'; // Show alert
    } else if (data.main.temp > 35) {
        alertMessage.innerText = '⚠️ Heatwave Alert! Stay hydrated.';
        alertMessage.style.display = 'block'; // Show alert
    }
}

document.getElementById('update-weather').addEventListener('click', fetchWeather);

// Initial fetch on page load
fetchWeather();
