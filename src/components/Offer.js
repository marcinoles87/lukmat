import React from 'react'

import card1 from '../img/card1.avif'
import card2 from '../img/card2.avif'
import card3 from '../img/card3.avif'

function Offer() {
  return (
    <div className='offer-container'>
        <div className='offer-header'>
            <h1>ZAMOW U NAS CZESCI</h1>
            <p>Kup nowego Peugeot dopasowanego do Twoich potrzeb za pośrednictwem naszej strony internetowej lub w wybranym salonie sprzedaży.</p>
        </div>

        <div className='offer-cards'>
            <div className='offer-one-card'>
                <img src={card1} alt='1'></img>
                <h3>Oleje</h3>
                <p>Poznaj wszystkie zalety PEUGEOT w zaciszu własnego domu.Bezzwłocznie odkryj i zamów swoje następne auto.</p>
            </div>

            <div className='offer-one-card'>
                <img src={card2} alt='1'></img>
                <h3>Hamulce</h3>
                <p>Poznaj wszystkie zalety PEUGEOT w zaciszu własnego domu.Bezzwłocznie odkryj i zamów swoje następne auto.</p>
            </div>

            <div className='offer-one-card'>
                <img src={card3} alt='1'></img>
                <h3>Opony</h3>
                <p>Poznaj wszystkie zalety PEUGEOT w zaciszu własnego domu.Bezzwłocznie odkryj i zamów swoje następne auto.</p>
            </div>
        </div>
    </div>
  )
}

export default Offer