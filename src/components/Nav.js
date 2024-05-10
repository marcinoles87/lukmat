import React from 'react'

function Nav() {
  return (
    <div className='nav-container'>
      <div className='nav-logo-container'>
        Logo
        <img src='' alt=''></img>
      </div>

      <div className='nav-link-container'>
        <ul>
        <a href='#' className='nav-link-item'>O Nas</a>
        <a href='#'  className='nav-link-item'>Nasze Marki</a>
        <a href='#'  className='nav-link-item'>Co robimy</a>
        <a href='#'  className='nav-link-item'>Sprowadzanie aut z Francji</a>
        <a href='#'  className='nav-link-item'>Kontakt</a>
        </ul>
        
       

      </div>
    </div>
  )
}

export default Nav