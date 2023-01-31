import ExpenseItem  from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React from "react";
import { getNodeText } from "@testing-library/react";
function App() {

 

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [getexpenseData,setExpenseData] = React.useState(expenses);
  const  expenseData = expenses1 =>{
    console.log('in App.js file');
    console.log(expenses1);
    console.log('expenses object array',getexpenseData);
    setExpenseData((previouse) =>{
      console.log(previouse);
     return [expenses1,...previouse];
    });

    console.log(getexpenseData);
  }
  return (
    <div>
     <NewExpense  onAddExpenseDataDetails={expenseData}/>
      <Expenses items={getexpenseData} />
    </div>
  );
}

export default App;
