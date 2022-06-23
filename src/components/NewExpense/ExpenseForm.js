import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isShown, setIsShown] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
    setIsShown((current) => !current);
  };

  const changeView = (event) => {
    event.preventDefault();

    // 👇️ toggle shown state

    setIsShown((current) => !current);
  };
  return (
    <div>
      {!isShown && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              ></input>
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                value={enteredDate}
                onChange={dateChangeHandler}
              ></input>
            </div>
          </div>

          <div className="new-expense__actions">
            <button type="button" onClick={changeView}>
              Cancel
            </button>

            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}

      {isShown && (
        <div>
          <button type=" button" onClick={changeView}>
            {" "}
            + Add New Expense.
          </button>
        </div>
      )}
    </div>
  );
};

export default ExpenseForm;
