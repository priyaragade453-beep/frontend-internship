import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="container">
      <h1>📝 React Todo App</h1>

      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button
  onClick={() => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  }}
>
  Add Task
</button>
<p>Total Tasks: {tasks.length}</p>

<ul>
  {tasks.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
    </div>
  );
}

export default App;