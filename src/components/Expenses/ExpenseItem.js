import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

import React, { useState } from 'react';

const ExpenseItem = (props) => {
    // const expenseDate= new Date(2021, 2, 28); //create a date object
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;
   

    //destructuring
    //returns 2 elements where title is the current value and setTitle is the value to be updated

    const [title, setTitle] = useState(props.title); 

    const clickHandler = () =>{
      setTitle('Updated');
      console.log(title);
  };

    return (
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{ title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    ); 
    //only one div is allowed. so nest the elements.

}


export default ExpenseItem;