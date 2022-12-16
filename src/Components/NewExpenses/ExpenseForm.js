import React, { useState } from "react";

export default function ExpenseForm(props) {

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enterTitle: '',
    //     enterAmount: '',
    //     enterDate: ''
    // })

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enterTitle: event.target.value,
        // })

        // setUserInput((prevState) => {
        //     return { ...prevState, enterTitle: event.target.value };
        // })
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateeChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        };

        props.onSaveData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <div className="d-flex justify-content-center">
            <form className="border rounded p-4 mb-3" onSubmit={submitHandler}>
                <h2 className="text-center mb-4">Expense Form</h2>
                <div className="mb-3 ">
                    <label htmlFor="title" className="form-label fw-bold">Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={titleChangeHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label fw-bold">Amount</label>
                    <input type="number" className="form-control" id="amount" value={amount} onChange={amountChangeHandler} />
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label fw-bold">Date</label>
                    <input type="date" className="form-control" id="date" value={date} onChange={dateeChangeHandler} />
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-info">Add Expense</button>
                </div>
            </form>
        </div>
    )
}