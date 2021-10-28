import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function IncomeExpenses() {
    const {transactions} = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts
    .filter(item =>item>0)
    .reduce((acc, item) => (acc+=item), 0)
    .toFixed(2)
    // console.log(income)

    const expense = amounts
    .filter(item => item<0)
    .reduce((acc,item) => (acc-=item), 0)* -1
    .toFixed(2)
    // console.log(expense)
    
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">&#8377;{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">&#8377;{expense}</p>
            </div>
            
        </div>
    )
}

export default IncomeExpenses
