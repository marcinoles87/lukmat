import React from 'react'

import audiLogo from '../img/audiLogo.png'

function Marki() 
{

  const brands = [audiLogo,]
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
