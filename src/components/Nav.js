import React from 'react'
import logo from '../img/logo2.png'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav-container'>
      <div className='nav-logo-container'>
        <img src={logo} alt='' className='logo'></img>
      </div>

      <div className='nav-link-container'>
        <ul>
          <li><a href='#oNas' className='nav-link-item'>O Nas</a></li>
        <li><a href='#Marki'  className='nav-link-item'>Nasze Marki</a></li>
        <li><a href='#oNas'  className='nav-link-item'>Co robimy</a></li>
        <li><a href='#Czesci'  className='nav-link-item'>Części</a></li>
        <li><a href='#Import'  className='nav-link-item'>Sprowadzanie aut z Francji</a></li>
        <li><a href='#Kontakt'  className='nav-link-item'>Kontakt</a></li>
        </ul>
        
       

      </div>
    </div>
  )
}

export default Nav