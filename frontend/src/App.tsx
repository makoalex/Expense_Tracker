import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import './App.css'
import { ExpenseObj } from './Types';
import { useState } from 'react';

const expenses: ExpenseObj[]= [
  {
    id: 'e1',
    title: 'Chew toy Pepe',
    amount: 165,
    date: new Date(2023, 5, 14),
  },
  { id: 'e2',
   title: 'Dress', 
   amount: 1299, 
   date: new Date(2023, 7, 4) },
  {
    id: 'e3',
    title: 'Klarna',
    amount: 450,
    date: new Date(2023, 2, 28),
  },
  {
    id: 'e4',
    title: 'Pragmatic programmer',
    amount: 450,
    date: new Date(2023, 5, 12),
  },
];

function App() {
  const [expensed, setExpenses]= useState<ExpenseObj[]>(expenses)
  
 const addExpenseHandler = (expense:ExpenseObj)=>{
  console.log(expense)
  setExpenses(prevExpens => {
    return [expense, ...prevExpens]
  })
 }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses item={expensed}></Expenses>
    </div>
  );
}

export default App;
