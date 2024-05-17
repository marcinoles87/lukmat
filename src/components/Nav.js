import React from 'react'
import logo from '../img/logo2.png'

function Nav() {
  return (
    <div className='nav-container'>
      <div className='nav-logo-container'>
        <img src={logo} alt='' className='logo'></img>
      </div>

      <div className='nav-link-container'>
        <ul>
        <a href='#oNas' className='nav-link-item'>O Nas</a>
        <a href='#Marki'  className='nav-link-item'>Nasze Marki</a>
        <a href='#'  className='nav-link-item'>Co robimy</a>
        <a href='#Czesci'  className='nav-link-item'>Części</a>
        <a href='#'  className='nav-link-item'>Sprowadzanie aut z Francji</a>
        <a href='#'  className='nav-link-item'>Kontakt</a>
        </ul>
        
       

      </div>
    </div>
  )
}

export default Nav