import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  //  multiple state handling approach
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [toggleForm, setToggleForm] = useState(false);

  // using one state instead but have to update all properties
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleEventHandler = (event) => {
    // log keystrokes
    console.log(event.target.value);
    setEnteredTitle(event.target.value);
    /* 
    setUserInput({
      copy stored state values, ensures other values aren't thrown away when we update
      ...userInput, 
      enteredTitle: event.target.value, // override just the title
    }); */

    // alternative - when you update state and are dependent on the previous state
    // prev state snapshot
    // setUserInput((prevState) => {
      // return new state
    //   return { ... prevState, enteredTitle: event.target.value}
    // }); // safer way that you get latest snapshot as react calls the anonymous function
  }

  const amountEventHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const dateEventHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  const toggleFormHandler = () => {
    setToggleForm(prevState => !prevState);
  }

  /**
   * shared handler function
   * @param {string} identifier
   * @param {string} value
   */
  const inputChangeHandler = (identifier, value) => {
    switch(identifier) {
      case 'title':
        setEnteredTitle(value);
        break;
      case 'amount': 
        setEnteredAmount(value);
        break;
      case 'date':
        setEnteredDate(value);
        break;
      default: 
        break;
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }
    // we are using props to let child trigger parent function
    props.onSaveExpenseData(expenseData);
    // 2 way binding, set value and reset values
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setToggleForm();
  }

  if(!toggleForm) {
    return <form>
      <button type="button" onClick={toggleFormHandler}>Add New Expense</button>
    </form>
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text" 
            onChange={(event) => inputChangeHandler('title', event.target.value)} 
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input 
            type="number" min="0.01" step="0.01" 
            onChange={amountEventHandler} 
            value={enteredAmount} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input 
            type="date" min="2019-01-01" max="2023-12-31" 
            onChange={dateEventHandler} value={enteredDate} />
        </div>
      </div>

      <div className="new-expense__actions-container">
        <div className="new-expense__actions">
          <button type="button" onClick={toggleFormHandler}>Cancel</button>
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm;