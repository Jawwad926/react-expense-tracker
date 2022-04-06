import React from "react";

import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const newExpenseDataHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(newExpenseData);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveNewExpenseData={newExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
