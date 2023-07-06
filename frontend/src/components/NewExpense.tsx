import { useState } from 'react';
import './NewExpense.css';
import { ExpenseDataType , } from '../Types';
import ExpenseDateProps from '../Types';

const NewExpense = (props:any) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });
  const titleHandler = (e: any) => {
    console.log(e.target.value);
    setEnteredTitle(e.target.value);
  };
  // setUserInput((prevState) => {
  //   return { ...prevState, enteredTitle: event.target.value };
  // });
  let expenseData: ExpenseDataType;

  const amountHandler = (e: any) => {
    setEnteredAmount(e.target.value);
  };

  const dateHandler = (e: any) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    expenseData = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    props.onAddExpense(expenseData)
    console.log(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
    
  };

  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <section className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" name="" id="text" value={enteredTitle} onChange={titleHandler} />
          </div>
        </section>
        <section>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountHandler}/>
          </div>
        </section>
        <section>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2021-01-01" max="2025-12-31" onChange={dateHandler} />
          </div>
        </section>
        <div className="new-expense__actions">
          <button type="submit">Push it</button>
        </div>
      </form>
    </div>
  );
};
export default NewExpense;
