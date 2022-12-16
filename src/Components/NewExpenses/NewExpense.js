import React from "react";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
    const saveDataHandler = (res) => {
        const expenseData = {
            ...res,
            id: Math.random().toString(),
        }
        props.onAdd(expenseData)
    }

    return (
        <div>
            <ExpenseForm onSaveData={saveDataHandler} />
        </div>
    )
}