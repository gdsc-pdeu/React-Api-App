import React, { createContext, useEffect, useReducer } from 'react'
import AppReducer from './AppReducer'
//initial state
const initialState = {
    transactions: [
        
    ]
}
// console.log(initialState)

//create context 
export const GlobalContext = createContext(initialState)

//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch]  = useReducer(AppReducer, initialState, () => { //here 3rd argument is being passed which ignores the second argument names initial state and restores the previous data on refresh
        const localData = localStorage.getItem('transactions')
        return localData ? JSON.parse(localData) : initialState
    })

    //Actions
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DEL_TRANS',
            payload: id
        })
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANS',
            payload: transaction
        })
    }
    

    //save the state to the local storage
    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state))
    }, [state])

    return (<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>)
}