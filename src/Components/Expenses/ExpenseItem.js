import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

export default function ExpenseItem(props) {
    const [title,setTitle]= useState(props.title)

    function clickHandler(){
        setTitle("Updated!!")
        console.log(title);
    }


    return (
        <div className="d-flex justify-content-between align-items-center bg-dark text-white rounded p-3 mb-3">
            <div className="d-flex align-items-center">
                <ExpenseDate date={props.date} />
                <h2>{title}</h2>
            </div>
            <div className="">
                <div className="bg-info text-center rounded p-3 border fw-bold">${props.amount}</div>
                <button className="btn btn-light mt-3" onClick={clickHandler}>Change Title</button>
            </div>
        </div>
    )
}