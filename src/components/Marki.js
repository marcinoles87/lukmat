import React from 'react'

import audiLogo from '../img/audiLogo.png'
import bmwLogo from '../img/bmwLogo.png'
import peugeotLogo from '../img/peugeotLogo.png'
import renaultLogo from '../img/renaultLogo.jpg'

function Marki() 
{

  const brands = [audiLogo,bmwLogo,peugeotLogo,renaultLogo,]
  return (
    <div>

      

<div className='brands-container'>
          {brands.map( (item) => {
          return(
            <div className='brand-one'>
              <img src={item} alt=""></img>
              </div>
            
          )
      })}      
               </div>
     
        
    </div>
  )
}

export default  Marki
