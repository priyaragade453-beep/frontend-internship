import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    city: "Mumbai",
    temp: "30°C",
    condition: "Sunny ☀️",
    humidity: "70%",
    wind: "12 km/h",
  });

  const searchCity = () => {
    const name = city.trim().toLowerCase();

    if (name === "delhi") {
      setWeather({
        city: "Delhi",
        temp: "38°C",
        condition: "Hot ☀️",
        humidity: "45%",
        wind: "15 km/h",
      });
    } else if (name === "pune") {
      setWeather({
        city: "Pune",
        temp: "26°C",
        condition: "Cloudy ☁️",
        humidity: "60%",
        wind: "10 km/h",
      });
    } else if (name === "bangalore") {
      setWeather({
        city: "Bangalore",
        temp: "24°C",
        condition: "Rainy 🌧️",
        humidity: "80%",
        wind: "18 km/h",
      });
    } else {
      setWeather({
        city: city || "Mumbai",
        temp: "30°C",
        condition: "Sunny ☀️",
        humidity: "70%",
        wind: "12 km/h",
      });
    }

    setCity("");
  };

  return (
    <div className="container">
      <h1>🌤 Weather App</h1>

      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={searchCity}>
        Search
      </button>

      <div className="weather-card">
        <h2>{weather.city}</h2>
        <h3>{weather.temp}</h3>
        <p>{weather.condition}</p>
        <p>Humidity: {weather.humidity}</p>
        <p>Wind: {weather.wind}</p>
      </div>
    </div>
  );
}

export default App;