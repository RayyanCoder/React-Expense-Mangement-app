import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

  const [filterYear,setFilterYear]=React.useState('2022');
  const filterYearData = (year)=>{
    console.log('in Expense ');
    console.log(year);
    setFilterYear(year);
  }

  const filterDataItem = props.items.filter(item => item.date.getFullYear().toString() === filterYear);
  return (
   
     
<Card className="expenses">

<ExpensesChart
expenses={filterDataItem}
>

</ExpensesChart>
<ExpensesFilter  selected={filterYear} onExpenseChangeFilter={filterYearData}/>
{filterDataItem.length == 0?<p>No Record Found</p>:filterDataItem.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} id={expense.id}></ExpenseItem>)}


   
    </Card>
  
 
  );
}

export default Expenses;
