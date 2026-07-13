import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    city: "City Name",
    temperature: "--",
    condition: "Search a city",
    humidity: "--",
    emoji: "🌤️",
  });

  const getWeather = () => {
    const searchCity = city.trim().toLowerCase();

    if (searchCity === "mumbai") {
      setWeather({
        city: "Mumbai",
        temperature: 32,
        condition: "Sunny",
        humidity: 70,
        emoji: "☀️",
      });
    } else if (searchCity === "delhi") {
      setWeather({
        city: "Delhi",
        temperature: 38,
        condition: "Hot",
        humidity: 40,
        emoji: "🥵",
      });
    } else if (searchCity === "pune") {
      setWeather({
        city: "Pune",
        temperature: 27,
        condition: "Cloudy",
        humidity: 60,
        emoji: "⛅",
      });
    } else if (searchCity === "bangalore") {
      setWeather({
        city: "Bangalore",
        temperature: 24,
        condition: "Rainy",
        humidity: 82,
        emoji: "🌧️",
      });
    } else {
      setWeather({
        city: city || "Unknown City",
        temperature: "--",
        condition: "Weather Data Not Available",
        humidity: "--",
        emoji: "❓",
      });
    }

    setCity("");
  };

  return (
    <div className="container">
      <h1>🌦 React Weather App</h1>

      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>
        Get Weather
      </button>

      <div className="weather-card">
        <div className="emoji">{weather.emoji}</div>

        <h2>{weather.city}</h2>

        <h3>{weather.temperature}°C</h3>

        <p>{weather.condition}</p>

        <p>💧 Humidity: {weather.humidity}%</p>
      </div>
    </div>
  );
}

export default App;