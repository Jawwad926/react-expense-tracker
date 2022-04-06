import React, { useState } from "react";

import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isEdited, setIsEdited] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const expenseDataHandler = (event) => {
    event.preventDefault();

    const newExpenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveNewExpenseData(newExpenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setIsEdited(false);
  };

  const buttonSubmitHandler = () => {
    setIsEdited(true);
  };

  return (
    <div>
      {!isEdited && (
        <div className="centered-button">
          <button type="submit" onClick={buttonSubmitHandler}>
            Add Expense
          </button>
        </div>
      )}
      {isEdited && (
        <form onSubmit={expenseDataHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label htmlFor="title">Title</label>
              <input
                onChange={titleChangeHandler}
                value={enteredTitle}
                type="text"
                name="title"
                id="title"
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="amount">Amount</label>
              <input
                onChange={amountChangeHandler}
                value={enteredAmount}
                type="number"
                name="amount"
                id="amount"
                min="0.01"
                step="0.01"
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="date">Date</label>
              <input
                onChange={dateChangeHandler}
                value={enteredDate}
                type="date"
                name="date"
                id="date"
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NewExpenseForm;
