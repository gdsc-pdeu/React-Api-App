import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";


function AddTransaction() {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')

    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = e => {
      e.preventDefault()
      const newTransaction = {
        id: Math.floor(Math.random() * 1000000),
        text: text,
        amount: parseFloat(amount) //parseFloat is being used to convert the string into a number
      }

      addTransaction(newTransaction)
    }
    useEffect(() => {
      const userData = JSON.parse(localStorage.getItem('newTransaction'))
      // console.log(userData)
    },[])
  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
            <label><strong>Text</strong></label>
            <input type="text" placeholder="Enter Text..." value={text} onChange={(e) => setText(e.target.value)} required/>
        </div>
        <div className="form-control">
            <label><strong>Amount</strong><br/>
                (<span style={{color: '#ec1a04'}}>Negative - Expense</span>, <span style={{color: '#2ecc71'}}>Positive - Income</span>)
            </label>
            <input type="number" step="any" id="amount" placeholder="Enter Amount..." value={amount} onChange={(e) => setAmount(e.target.value)} required/>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
