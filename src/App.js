import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// random dadta  used to show how props can be used
const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
const [expenses,setExpenses]=useState(DUMMY_DATA)

  const addExpenseDataHandler = (enteredExpenseData) => {
    setExpenses((prevExpenses) =>{
      return [enteredExpenseData, ...prevExpenses];
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseDataHandler}></NewExpense>

      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
