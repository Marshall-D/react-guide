import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (filteredData) => {
    console.log("Expense.js");
    setFilteredYear(filteredData);
    console.log(filteredYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        getYearData={filterChangeHandler}
      ></ExpensesFilter>

      <ExpensesList items={filteredExpenses}> </ExpensesList>
    </Card>
  );
};

export default Expenses;
