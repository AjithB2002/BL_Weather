import React from 'react'
import logo from '../assets/weatherimg.png'
import './NavBar.css'
function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg  p-4 ">
  <div className="container-fluid ">
  <a className="navbar-brand mx-auto" href="#">
      <img src={logo} alt="Logo" width="40" height="39" className="d-inline-block align-text-top pb-1"/>
     <span className='weather'>BL WEATHER APP</span>
    </a>
  </div>
</nav>
    </>
  )
}

export default NavBar