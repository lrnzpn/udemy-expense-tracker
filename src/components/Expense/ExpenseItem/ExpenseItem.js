import './ExpenseItem.css';
import { ExpenseDate } from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';
import { useState } from 'react'

// can destructure props ({date, title, amount})
// can be props.expenses.title if using 1 object
const ExpenseItem = (props) => {

  // react hooks intro
  // array destructuring [value itself, updating function]
  // point at managed value, function to call new title
  const [title, setTitle] =  useState(props.title); // returns an array

  const clickHandler = () => {
    // tell react to assign new value, then component and html code is evaluated
    setTitle('Updated!'); 
  };

  return (
    // semantic change
    <li> 
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">PHP{props.amount}</div>
        </div>
        {/* no need to put parentheses because it will be evaluated on runtime instead of onClick  */}
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;