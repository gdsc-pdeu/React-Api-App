import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


function Balance() {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)
    // console.log(amounts)
    const total = amounts.reduce((acc, item) => (acc+=item), 0).toFixed(2)
    // console.log(total)
    return (
        <>
           <h4>Your Balance</h4>
           <h1 id="balance">&#8377;{total}</h1> 
        </>
    )
}

export default Balance
