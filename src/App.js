import { useState } from "react";
import "./App.css";
import { Expenses } from "./components/expenses/Expenses";
import { NewExpense } from "./components/new-expense/NewExpense";

function App() {

  const [expenses, setExpenses] = useState([]);

  const addNewExpense = (data) => {
    const updatedExpense = [...expenses, data];
    setExpenses(updatedExpense);
  };
  return (
    <div className="App">
      <NewExpense onNewExp={addNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
