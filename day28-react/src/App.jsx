import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = () => {
    if (city.trim() === "") {
      alert("Please enter a city name.");
      return;
    }

    setWeather({
      city: city,
      temperature: 28,
      condition: "Sunny ☀️",
      date: new Date().toLocaleDateString(),
    });
  };

  const resetWeather = () => {
    setCity("");
    setWeather(null);
  };

  return (
    <div className="container">
      <h1>🌤 React Weather App</h1>

      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Get Weather</button>

      <button className="reset-btn" onClick={resetWeather}>
        Reset
      </button>

      {weather && (
        <div className="weather-card">
          <h2>{weather.city}</h2>
          <h3>{weather.temperature}°C</h3>
          <p>{weather.condition}</p>
          <p>Date: {weather.date}</p>
        </div>
      )}
    </div>
  );
}

export default App;