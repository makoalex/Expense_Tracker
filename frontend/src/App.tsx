import { useState } from 'react';
import ExpenseItem from './components/ExpenseItem';
// import { ExpenseObj} from './Types';
import React from 'react';

function App() {
  //making a hardcoded  expense array instead for the database
  const expenses = [
    {
      id: 'e1',
      title: 'Dress',
      amount: 1299,
      date: new Date(2023, 6, 14),
    },
    {
      id: 'e2',
      title: 'iphone Case',
      amount: 499.99,
      date: new Date(2023, 5, 12),
    },
    {
      id: 'e3',
      title: 'Dog Insurance',
      amount: 294.67,
      date: new Date(2023, 6, 28),
    },
    {
      id: 'e4',
      title: 'Ice mobile',
      amount: 450,
      date: new Date(2023, 7, 12),
    },
  ];

  return (
    <>
      <section>
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date.toString()}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date.toString()}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date.toString()}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date.toString()}
        ></ExpenseItem>
      </section>
    </>
  );
}

export default App;
