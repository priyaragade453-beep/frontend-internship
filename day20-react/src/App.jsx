import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hour = time.getHours();

  let greeting = "";

  if (hour < 12) {
    greeting = "🌞 Good Morning";
  } else if (hour < 18) {
    greeting = "☀️ Good Afternoon";
  } else {
    greeting = "🌙 Good Evening";
  }

  return (
    <div className="container">
      <h1>🕒 Digital Clock</h1>

      <div className="clock">
        {time.toLocaleTimeString([], {
          hour12: !is24Hour,
        })}
      </div>

      <h2>{greeting}</h2>

      <h3>{time.toDateString()}</h3>

      <button
        className="toggle-btn"
        onClick={() => setIs24Hour(!is24Hour)}
      >
        Switch to {is24Hour ? "12 Hour" : "24 Hour"} Format
      </button>

      <p>React Live Clock</p>
    </div>
  );
}

export default App;