import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

export default function NewExpense (props){

    const [getEdit,setEdit] = React.useState('');

    const getFormsData = (expenseData)=>{
        const newExpenseData = {
            ...expenseData,
            id:Math.floor(Math.random() *10).toString()
        }

        console.log('passes successfully',newExpenseData);
        props.onAddExpenseDataDetails(newExpenseData);
    }

    const editHandler = ()=>{
        setEdit(true);
    }

    const stopEditingHandler = ()=>{
        setEdit(false)
    }
    return(
        <div className='new-expense'>
            {!getEdit && <button onClick={editHandler}>Add New Expense</button>}
            {getEdit &&  <ExpenseForm onStopEditingHandler={stopEditingHandler} onExpenseData ={getFormsData}></ExpenseForm>}
        
        </div>
    );
}