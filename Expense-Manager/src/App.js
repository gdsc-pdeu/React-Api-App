import React from 'react'
import Header from './components/Header'
// import './App.css'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'
import {darkTheme, GlobalStyles, lightTheme} from './styles/GlobalStyles'
import useDarkMode from './styles/useDarkMode'
import ToggleTheme from './components/ToggleTheme'
import styled, {ThemeProvider} from 'styled-components'
import Footer from './components/Footer'

function App() {
    const [theme, toggleTheme] = useDarkMode()
    const themeMode = theme==='light' ? lightTheme : darkTheme
    // console.log(themeMode)
    return (
        <ThemeProvider theme={themeMode}>
        <GlobalProvider>
            <GlobalStyles />
            <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
           <Header />
           <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
           </div>
           <Footer />
        </GlobalProvider>
        </ThemeProvider>

    )
}

export default App
