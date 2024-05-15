import React from 'react'

function Header() {
  return (
    <div className='header-container'>
      <h1>Dlaczego wybrać <br></br> LukMat</h1>
    

      <div className='header-info'>
        <div className='header-info-back'>
          
          <div className='header-text'>
            <div className='header-text-link'>
              <a href='#'>Jakośc</a>
              <a href='#'>Technika</a>
              <a href='#'>Prezycja</a>
            </div>
         
            <h1>Some text extra </h1> 
            <p>Najnowszej generacji Peugeot i-Cockpit® z kompaktową kierownicą oferuje najwyższej jakości ergonomię i technologie, które pozwolą Ci cieszyć się jazdą z zupełnie innej perspektywy.
              </p>

              <button>ZAREZERWUJ TERMIN</button>
          </div>
         
        </div>
        
      </div>
      
      
    </div>
  )
}

export default Header