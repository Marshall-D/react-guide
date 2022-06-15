import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  // random dadta  used to show how props can be used
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseDataHandler = (enteredExpenseData) => {
    console.log('App.js')
    console.log(enteredExpenseData);

};




  return (
    <div> 
      <NewExpense onAddExpense = {addExpenseDataHandler}></NewExpense>

      <Expenses expenses={expenses}></Expenses>

    </div>
  );
}

export default App;
