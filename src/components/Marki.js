import React from 'react'

import audiLogo from '../img/audiLogo.png'
import bmwLogo from '../img/bmwLogo.png'
import peugeotLogo from '../img/peugeotLogo.png'
import renaultLogo from '../img/renaultLogo.jpg'
import toyotaLogo from '../img/toyotaLogo.png'

function Marki() 
{

  const brands = [audiLogo,bmwLogo,peugeotLogo,renaultLogo,toyotaLogo]
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
