import React from 'react'
import '../../public/styles.css'
import { optionsadmins, optionstrainer } from './optionslist'

function Navbar() {
    const optionsToDisplay = optionsadmins;

    return (
        <div className='navbar'>
            <div className='navbar-elem'>
            {optionsToDisplay.map((option, index) => {
                return (
                    <button key={index}>{option}</button>
                );
            })}
            </div>
            <button className='open-close'>➤</button>
        </div>
    )
}

export default Navbar
