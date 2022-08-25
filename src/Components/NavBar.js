import React from 'react'
import foto from "../Images/logosexshop.png"

const NavBar = () => {
  return (
    <div className='nav'>
    <a href='' className='nav__link'>Home</a>
    <a href='' className='nav__link'>Productos</a>
    <a href='' className='nav__link'>Contacto</a>
    <div className='logo'>
    <img className='nav__logo' src= {foto} width= "200px" height= "200px" />
    {/* <p className='nav__logo-nombre'>Secret</p> */}
    </div>
    </div>
  )
}

export default NavBar