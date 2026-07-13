import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(now.toLocaleTimeString());
      setDate(now.toDateString());

      const hour = now.getHours();

      if (hour < 12) {
        setGreeting("🌞 Good Morning");
      } else if (hour < 17) {
        setGreeting("☀️ Good Afternoon");
      } else if (hour < 21) {
        setGreeting("🌇 Good Evening");
      } else {
        setGreeting("🌙 Good Night");
      }
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>🕒 Digital Clock</h1>

      <h3>{greeting}</h3>

      <h2>{time}</h2>

      <p>{date}</p>
    </div>
  );
}

export default App;