import React from 'react'
import logo from '../img/logo2.png'

function Header() {
  return (
    <div className='header-container'>
      <h1>DLACZEGO WARTO WYBRAĆ<br></br> LukMat Mechanika</h1>
    

      <div className='header-info'>
        <div className='header-info-back'>
          
          <div className='header-text'>
            <div className='header-text-link'>
              <a href='#'>Jakośc</a>
              <a href='#'>Technika</a>
              <a href='#'>Precyzja</a>
            </div>
         
            <h1>Some text extra </h1> 
            <p>Najnowszej generacji Peugeot i-Cockpit® z kompaktową kierownicą oferuje najwyższej jakości ergonomię i technologie, które pozwolą Ci cieszyć się jazdą z zupełnie innej perspektywy.
              </p>

              <button>ZAREZERWUJ TERMIN</button>
          </div>

          <img src={logo} alt='logo'></img>
         
        </div>
        
      </div>
      
      
    </div>
  )
}

export default Header