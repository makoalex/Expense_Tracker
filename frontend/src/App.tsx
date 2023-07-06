import Expenses from './components/Expenses';
import NewExpense from './components/Newexpense';
function App() {
  const expenses = [
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

  return (
    <div>
      <NewExpense></NewExpense>
      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;
