import React from 'react'
import CartWidget from './CartWidget'
/* import foto from "../Images/logo-.png" */

const NavBar = () => {
  return (
    <nav>
     {/*  <div className='logo'>
      <img src= {foto}/>
      </div> */}
      <ul className='nav'>
        <li className='nav__item'>
          <a href='#' className='nav__logo'>4 PATITAS</a>
        </li>
        <li className='nav__item'>
          <a href='#' className='nav__link'>Productos</a>
        </li>
        <li className='nav__item'>
          <a href='#' className='nav__link'>Contacto</a>
        </li> 
        <CartWidget/>
      </ul>
    </nav>
  )
}

export default NavBar