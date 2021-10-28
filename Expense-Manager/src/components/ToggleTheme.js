import React from 'react'
import { FaRegMoon, FaRegSun } from 'react-icons/fa'
import { FiSun }  from 'react-icons/fi'
import { IconContext } from 'react-icons/lib'
import styled from 'styled-components'
import '../styles/GlobalStyles'

function ToggleTheme({ theme, toggleTheme }) {
    // console.log(theme)
    return (
        <IconContext.Provider value={{className:"icon-btn"}}>
        <div onClick={toggleTheme}>
            {theme==='light' ? <FaRegMoon size={30}/> : <FiSun size={30}/> }
        </div>
        </IconContext.Provider>
    )
}

export default ToggleTheme