import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  return (

    <div className="container">

      <h1> React Counter App</h1>

      <h2>{count}</h2>

      <div className="buttons">
  <button onClick={() =>
     setCount(count + 1)}>
    Increase
  </button>

 <button
  onClick={() => {
    if (count > 0) {
      setCount(count - 1);
    }
  }}
>
  Decrease
</button>

  <button onClick={() => setCount(0)}>
    Reset
  </button>
</div>

    </div>

  );

}

export default App;