import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({transaction}) {
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : '+'
  return (
    <li className={sign==='+' ? 'plus' : 'minus'}>
      {transaction.text} <span>{sign}&#8377;{Math.abs(transaction.amount)}</span>
      <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  );
}

export default Transaction;
