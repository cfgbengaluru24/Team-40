import React from 'react'
import '../../public/styles.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        Best Practices Foundation
      </div>
      <div className='header-buttons-div'>
        <button className='header-button'>About Us</button>
        <button className='header-button'>Donate</button>
      </div>
    </div>
  )
}

export default Header