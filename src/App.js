import './App.css';
import ExpenseItem from './Components/ExpenseItem';

const expenses = [
  { id: 1, title: 'New Car', amount: 14.23, date: new Date(2021, 2, 28) },
  { id: 2, title: 'New Tv', amount: 14.23, date: new Date(2021, 5, 21) },
  { id: 3, title: 'New Table', amount: 14.23, date: new Date(2021, 3, 8) },
  { id: 4, title: 'New Wadrobe', amount: 14.23, date: new Date(2021, 6, 30) },
  { id: 5, title: 'New Refrigerator', amount: 14.23, date: new Date(2021, 1, 2) },
]

function App() {
  return (
    <div className='overflow-auto h-100 p-3'>
      {expenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date} />
        )
      })}
    </div>
  );
}

export default App;
