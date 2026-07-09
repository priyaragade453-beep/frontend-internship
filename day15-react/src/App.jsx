import "./App.css";

function App() {
  const course = "React Development";
  const mentor = "Priya";
  const students = 30;

  return (
    <div className="container">
      <h1>📚  Welcome  to {course}</h1>

      <h2>Mentor: {mentor}</h2>

      <p>Total Students: {students}</p>

      <p>{students >= 20 ? "Batch Full ✅" : "Seats Available"}</p>

      <button>Join Now</button>
    </div>
  );
}

export default App;