import React from 'react'
import logo from '../asset/img/logo.png'
import arrow from '../asset/img/arrow.jpeg'
import { useNavigate, useLocation } from 'react-router-dom'

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const doLogout =()=>{
    navigate('/')
  }
  console.log("MSG", location.pathname);
  return (
    <div className='header'>
      <div style={{ width: '90%',  display: 'flex', alignItems: 'center' }}>
        <img src={logo} />
        <h2>Expense Tracker</h2>
      </div>
      {
        location.pathname === "/dashboard" ?
          <div style={{ width: '10%', display: 'flex', alignItems: 'center' }}>
            <p className="dropbtn">User Name</p>
            <div className="dropdown">
              
              <img style={{ width: '10px', height: '10px', marginLeft: '10px', alignItems: 'center' }} src={arrow} />
              <div class="dropdown-content">
                <p>Change Password</p>
                <p onClick={doLogout}>Logout</p>
              </div>
            </div>
            {/* <p>User Name</p>
            <img style={{ width: '10px', height: '10px', marginLeft: '10px', alignItems: 'center' }} src={arrow} />*/}
          </div> 
          : null
      }

    </div>
  )
}

export default Header