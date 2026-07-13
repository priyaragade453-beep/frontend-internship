import { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      alert("Please enter both height and weight.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (
      weight / (heightInMeters * heightInMeters)
    ).toFixed(2);

    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setStatus("🟡 Underweight");
    } else if (bmiValue < 25) {
      setStatus("🟢 Normal Weight");
    } else if (bmiValue < 30) {
      setStatus("🟠 Overweight");
    } else {
      setStatus("🔴 Obese");
    }
  };

  return (
    <div className="container">
      <h1>⚖️ BMI Calculator</h1>

      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <button onClick={calculateBMI}>
        Calculate BMI
      </button>

      <h2>BMI: {bmi}</h2>

      <h3>{status}</h3>
    </div>
  );
}

export default App;