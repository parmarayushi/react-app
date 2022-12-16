import './App.css';
import ExpenseList from './Components/Expenses/ExpeneList';
import NewExpense from './Components/NewExpenses/NewExpense';


function App() {
  const addExpense=(expense)=>{
    console.log(expense);
    console.log('hello');
  }
  return (
    <div className='overflow-auto h-100 p-3'>
       <NewExpense onAdd={addExpense}/> 
      <ExpenseList /> 
    </div>
  );
}

export default App;
