import React from "react";

export default function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const date = props.date.toLocaleString('en-US', { day: '2-digit' })
    const year = props.date.getFullYear()

    return (
        <div className="expense-date me-3 bg-secondary border rounded p-3 text-center">
            <h2>{month}</h2>
            <div className="fs-3">{year}</div>
            <h1>{date}</h1>
        </div>
    )
}