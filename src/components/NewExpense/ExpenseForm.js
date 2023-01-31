import React from "react";
import "./ExpenseForm.css";
export default function ExpenseForm(props) {
    //using multiple state handlings
//   const [enterTile, setTitle] = React.useState("");
//   const [enterAmount, setAmount] = React.useState("");
//   const [enterDate, setDate] = React.useState("");
//single state handling

const [userInput,setInput] = React.useState({
  title:'',
  amount:'',
  date:''
});
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    setInput((previouseState)=>{
        return({
            ...previouseState,
            title: event.target.value
        });
    });
  };
  const amountChangeHandler = (event) => {
    console.log(event.target.value);
    setInput((previouseState)=>{
        return({
            ...previouseState,
            amount: event.target.value*1
        });
    });
  };

  const submitChangeHandler = (event)=>{
    event.preventDefault();
    console.log(userInput);
    // setInput((previouseState)=>{
    //     return({
    //         ...previouseState,
    //         enterAmount: '',
    //         enterDate:'',
    //         enterTitle:''
    //     });
    // });

    props.onExpenseData(userInput);
    props.onStopEditingHandler();

  }
  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    setInput((previouseState)=>{
        return({
            ...previouseState,
            date: new Date (event.target.value)
        });
    });

    console.log(userInput.enterDate);
  };

  const cancelHandler = (event) => {
    props.onStopEditingHandler();
  }
  return (
    <form onSubmit={submitChangeHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={userInput.title} type="text" onChange={titleChangeHandler}></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input value={userInput.amount} type="number" min="0.01" step="0.01" onChange={amountChangeHandler}></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-12" onChange={dateChangeHandler}></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
