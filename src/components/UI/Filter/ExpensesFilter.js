import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const [filterYear, setFilterYear] =  useState('');
  let years = ['2019', '2020', '2021', '2022'];

  const filterHandler = (event) => {
    event.preventDefault();
    // console.log(event.target.value);
    props.onFilterYear(event.target.value);
    setFilterYear(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        {/* child receives default selected year from parent - 2 way binding! */}
        <select onChange={filterHandler} value={props.selectedYear}>
          {/* <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option> */}
          {
            years.map((year, idx) => <option key={idx} value={year}>{year}</option>)
          }
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;