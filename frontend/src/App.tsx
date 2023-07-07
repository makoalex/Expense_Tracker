import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import './App.css'
import { ExpenseObj } from './Types';
import { useState, useEffect } from 'react';


const expenses: ExpenseObj[]= [
  

];

function App() {
  const [expensed, setExpenses]= useState<ExpenseObj[]>(expenses)
  const [serverError, setServerError] = useState('')
 



 const addExpenseHandler = (expense:ExpenseObj)=>{
  console.log(expense)
  setExpenses(prevExpens => {
    return [expense, ...prevExpens]
  })
 }


 
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses key = {expensed.length}item={expensed}></Expenses>
    </div>
  );
}

export default App;
