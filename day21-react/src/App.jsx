import { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const add = () => {
    setResult(Number(num1) + Number(num2));
  };

  const subtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  const multiply = () => {
    setResult(Number(num1) * Number(num2));
  };

  const divide = () => {
    if (Number(num2) === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult((Number(num1) / Number(num2)).toFixed(2));
    }
  };

  return (
    <div className="container">
      <h1>🧮 React Calculator</h1>

      <input
        type="number"
        placeholder="Enter First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="buttons">
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>×</button>
        <button onClick={divide}>÷</button>
      </div>

      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;