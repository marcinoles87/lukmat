import React from 'react'

import castrol from '../img/castrol.jpg'
import shell from '../img/shell.jpg'
import lotos from '../img/lotos.jpg'

function Oleje() {

  const olejeProdukt = [
    {
      img :castrol ,
      nazwa :'Castrol GTX' ,
      pojemnosc : '1 L' ,
      cena : '99,99'
    } ,

    {
      img :shell ,
      nazwa :'Shell GTX' ,
      pojemnosc : '1 L' ,
      cena : '99,99'
    } ,

    {
      img :lotos ,
      nazwa :'Lotos GTX' ,
      pojemnosc : '1 L' ,
      cena : '99,99'
    } , 

    {
      img :castrol ,
      nazwa :'Castrol GTX' ,
      pojemnosc : '1 L' ,
      cena : '99,99'
    } ,

    {
      img :castrol ,
      nazwa :'Castrol GTX' ,
      pojemnosc : '1 L' ,
      cena : '99,99'
    } ,

    {
      img :castrol ,
      nazwa :'Castrol GTX' ,
      pojemnosc : '1 L' ,
      cena : '99,99'
    } ,
  ]
  return (
    <div className='oleje-container'>
      <div className='oleje-head'>
        <h1>Oleje i inne smary </h1>
      </div>

      <div className='oleje-cards-sell'>
        {olejeProdukt.map ( (item , index) => {
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

export default Oleje