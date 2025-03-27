import React from 'react'

import logo from '../img/logo2.png'

function Footer() {
  return (
    <div className='footer-container' id='Kontakt'>
      <div className='contact'>
        <h3>Email : lukmat@gmail.com</h3>
        <h3>Phone : 666-666-666</h3>
        <h3>Adres : Ostrów 156 Proszowice</h3>
        <h3>Części : 455-555-555 </h3>
        <h3>Dzial handlowy : 455-555-555 </h3>
      </div>

      <div>
        <img src={logo} alt='logo'></img>
      </div>
    </div>
  )
}

export default Footer