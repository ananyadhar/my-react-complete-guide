 import './ExpenseDate.css';
 
 import React from 'react';
 
 function ExpenseDate(props) {
    const month = props.date?.toLocaleString("en-US", { month: 'long' });
    const day = props.date?.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date?.getFullYear();
    /* formatting of the month, day and year by using toLocaleString method in js.  */

    return (
        <div className="expense-date">
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__year">{day}</div>
          <div className="expense-date__day">{year}</div>
        </div>
    );
 }

 export default ExpenseDate;