import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Chart from './components/Chart/Chart'; 



  const DUMMY_EMPLOYEES = [
    {
      id: "1",
      name: "Ananya",
      experience: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: "2",
      name: "Ramesh", 
      experience: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: "3",
      name: "Raju",
      experience: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "4",
      name: "Minal",
      experience: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = employee => {
    console.log('In App.js');
    console.log(employee);
  };

  const App = () => {
    const [expenses, setEmployees] = useState(DUMMY_EMPLOYEES);
    const addEmployeeHandler = expense => {
      setEmployees((prevEmployees) => {
        return [expense, ...prevEmployees];
      });
    };

  return (
    <div>
      <NewExpense onAddExpense={addEmployeeHandler} />
      <Expenses items={expenses} />
    </div>
  );
  };


export default App;
