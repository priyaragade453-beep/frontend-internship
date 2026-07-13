import { useState } from "react";
import "./App.css";

function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (note.trim() === "") {
      alert("Please write a note.");
      return;
    }

    setNotes([...notes, note]);
    setNote("");
  };

  const deleteNote = (indexToDelete) => {
    const updatedNotes = notes.filter((_, index) => index !== indexToDelete);
    setNotes(updatedNotes);
  };

  return (
    <div className="container">
      <h1>📝 React Notes App</h1>

      <h3>Total Notes: {notes.length}</h3>

      <textarea
        placeholder="Write your note..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button onClick={addNote}>Add Note</button>

      <div className="notes">
        {notes.length === 0 ? (
          <p>No notes added yet.</p>
        ) : (
          notes.map((item, index) => (
            <div className="note" key={index}>
              <p>{item}</p>

              <button
                className="delete-btn"
                onClick={() => deleteNote(index)}
              >
                🗑 Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;