import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (title.trim() === "" || amount.trim() === "") {
      alert("Please enter expense name and amount.");
      return;
    }

    const newExpense = {
      title: title,
      amount: Number(amount),
    };

    setExpenses([...expenses, newExpense]);

    setTitle("");
    setAmount("");
  };

  const deleteExpense = (indexToDelete) => {
    const updatedExpenses = expenses.filter(
      (_, index) => index !== indexToDelete
    );
    setExpenses(updatedExpenses);
  };

  const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="container">
      <h1>💰 Expense Tracker</h1>

      <h3>Total Expenses: {expenses.length}</h3>

      <input
        type="text"
        placeholder="Expense Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <h2>Total Amount: ₹{totalExpense}</h2>

      <div className="expenses">
        {expenses.length === 0 ? (
          <p>No expenses added yet.</p>
        ) : (
          expenses.map((expense, index) => (
            <div className="expense" key={index}>
              <div>
                <strong>{expense.title}</strong>
                <br />
                ₹{expense.amount}
              </div>

              <button
                className="delete-btn"
                onClick={() => deleteExpense(index)}
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