import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  // const animate = true
  return (
    <>
      <h3>History</h3>
      {/* <Fade bottom collapse> */}
      <ul id="list" className="list">
        {transactions.map((transaction) => {
          // setAnimate(true)
          return <Transaction transaction={transaction} key={transaction.id} />;
        })}
      </ul>
      {/* </Fade> */}
    </>
  );
}

export default TransactionList;
