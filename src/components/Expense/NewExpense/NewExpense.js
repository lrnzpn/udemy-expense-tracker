import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  // goal is to let child pass data to parent
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }

  return <div className='new-expense'>
    {/* using "on" to show that this will be a function called */}
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
  </div>
}

export default NewExpense;