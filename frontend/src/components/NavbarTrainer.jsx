import React from 'react'
import '../../public/styles.css'
import { optionsadmins, optionstrainer } from './optionslist'

function NavbarTrainer() {
    const optionsToDisplay = optionstrainer;

    return (
        <div className='navbar'>
            <div className='navbar-elem'>
            {optionsToDisplay.map((option, index) => {
                return (
                    <button key={index}>{option}</button>
                );
            })}
            </div>
        </div>
    )
}

export default NavbarTrainer
