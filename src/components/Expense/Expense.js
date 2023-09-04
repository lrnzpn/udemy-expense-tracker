import Card from "../UI/Card/Card";
import "./Expense.css";
import ExpensesFilter from "../UI/Filter/ExpensesFilter";
import { useState } from 'react';
import ExpenseList from "./ExpenseList/ExpenseList";
import '../Expense/ExpenseList/ExpenseList.css';
import ExpenseChart from "./ExpenseChart/ExpenseChart";

function Expense(props) {

  const [filterYear, setFilterYear] = useState('2020');
  // derived / computed state, as this is reexecuted and
  // is not needed to be managed with a separate state
  let filterInfoText = '2019, 2021 & 2022';
  switch(filterYear) {
    case '2019':
      filterInfoText = '2020, 2021 & 2022';
      break;
    case '2021':
      filterInfoText = '2019, 2020 & 2022';
      break;
    case '2022':
      filterInfoText = '2019, 2020 & 2021';
      break;
    default: 
      filterInfoText = '2019, 2021 & 2022';
      break;
  }

  const filterYearHandler = year => {
    setFilterYear(year);
  }

  let filterYearsArray = props.items.filter(item => {
    return item.date.toString().includes(filterYear);
  }); 
  // same as instructor solution, use filter to filter the dummy data
  // then map the data to the component like usual

  return (
    <div>
      <Card className="expenses">
        {/* bonus 2way binding, we pass the default selected year back to the child */}
        <ExpensesFilter onFilterYear={filterYearHandler} selectedYear={filterYear} />
        <p style={{color: 'white'}}>Data for years {filterInfoText} is hidden</p>
        {/* instead of individual props, can use one but this is recommended for readability
        <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} /> */}
        {
          // another way for shorter expressions: 
          // filterYearsArray.length === 0 && No expense found
          // filterYearsArray.length > 0 return ExpenseItem
          // or use variables to store jsx content then use if-else
          /* filterYearsArray.length === 0 ? <p style={{color:'white'}}>No expenses found</p> 
          : filterYearsArray.map(expense => {
            return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
          })}
        {
            props.items.map((expense) => 
            <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />) // expense={expense} */
          
        }
        <ExpenseChart expenses={filterYearsArray} />
        <ExpenseList items={filterYearsArray} />
      </Card>
    </div>
  )
}

export default Expense;