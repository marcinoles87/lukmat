import React from 'react'

import hamulce1 from '../img/hamulce1.jpg'
import hamulce2 from '../img/trw.jpg'


function Hamulce() {

  const hamulceProdukt = [
    {
      img :hamulce1 ,
      nazwa :'Castrol GTX' ,
      pojemnosc : '1 L' ,
      cena : '99,99'
    } ,

    {
      img :hamulce1 ,
      nazwa :'Shell GTX' ,
      pojemnosc : '1 L' ,
      cena : '99,99'
    } ,

    {
      img :hamulce2 ,
      nazwa :'Lotos GTX' ,
      pojemnosc : '1 L' ,
      cena : '99,99'
    } , 

    {
      img :hamulce1,
      nazwa :'Castrol GTX' ,
      pojemnosc : '1 L' ,
      cena : '99,99'
    } ,

  
  ]
  return (
    <div className='oleje-container'>
      <div className='oleje-head'>
        <h1>Hamulce i tarcze </h1>
      </div>

      <div className='oleje-cards-sell'>
        {hamulceProdukt.map ( (item , index) => {
          return(
            <div className='oleje-card-one' key={index}>
                <img src={item.img} alt={item.index}></img>
                <h1>{item.nazwa}</h1>
                <p>Pojemnośc : {item.pojemnosc}</p>
                <h3>Cena : {item.cena}</h3>
              </div>
          )
        })}
      </div>
    </div>
  )
}

export default Hamulce