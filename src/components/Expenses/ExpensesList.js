import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> Found no Expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((filteredExpense) => (
        <ExpenseItem
          key={filteredExpense.id}
          title={filteredExpense.title}
          amount={filteredExpense.amount}
          date={filteredExpense.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
