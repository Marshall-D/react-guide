import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (filteredData) => {
    console.log("Expense.js");
    setFilteredYear(filteredData);
    console.log(filteredYear);
  };


  const filteredExpenses = props.expenses.filter((expense) =>
{  return expense.date.getFullYear().toString() === filteredYear;
});
   
  

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        getYearData={filterChangeHandler}
      ></ExpensesFilter>
      
      {filteredExpenses.length === 0 ? <p>No data available</p> }
      {filteredExpenses.length === 0 ? <p>No data available</p> :
       filteredExpenses.map((filteredExpense) => (
          <ExpenseItem
            key={filteredExpense.id}
            title={filteredExpense.title}
            amount={filteredExpense.amount}
            date={filteredExpense.date}
          ></ExpenseItem>
        )) 
      };
     
    </Card>
  );
};

export default Expenses;
