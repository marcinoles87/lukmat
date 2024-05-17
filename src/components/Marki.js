import React from 'react'

import audiLogo from '../img/audiLogo.png'
import bmwLogo from '../img/bmwLogo.png'
import peugeotLogo from '../img/peugeotLogo2.png'
import renaultLogo from '../img/renaultLogo.jpg'
import toyotaLogo from '../img/toyotaLogo.png'
import hondaLogo from '../img/hondaLogo.png'

function Marki() 
{

  const brands = [audiLogo,bmwLogo,peugeotLogo,renaultLogo,toyotaLogo,hondaLogo]
  return (
    <div>

      

<div className='brands-container' id='Marki'>
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
