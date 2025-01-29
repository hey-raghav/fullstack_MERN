import React from 'react'
import logo from '../asset/img/logo.png'

function Header() {
  return (
    <div className='header'>
      <img src={logo}/>
      <h2>Expense Tracker</h2>
    </div>
  )
}

export default Header