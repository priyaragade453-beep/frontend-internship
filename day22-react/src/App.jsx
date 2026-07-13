import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

    let newPassword = "";

    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters[randomIndex];
    }

    setPassword(newPassword);
  };

  const copyPassword = () => {
    if (password === "") {
      alert("Generate a password first!");
      return;
    }

    navigator.clipboard.writeText(password);
    alert("Password copied successfully!");
  };

  return (
    <div className="container">
      <h1>🔐 Password Generator</h1>

      <input
        type="text"
        value={password}
        placeholder="Your Password"
        readOnly
      />

      <div className="buttons">
        <button onClick={generatePassword}>
          Generate Password
        </button>

        <button className="copy-btn" onClick={copyPassword}>
          📋 Copy
        </button>
      </div>
    </div>
  );
}

export default App;