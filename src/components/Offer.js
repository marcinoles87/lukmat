import React from 'react'

import card1 from '../img/olej.jpg'
import card2 from '../img/hamulce.jpg'
import card3 from '../img/opony.jpg'
import { Link } from 'react-router-dom'

function Offer() {
  return (
    <div className='offer-container' id='Czesci'>
        <div className='offer-header'>
            <h1>ZAMÓW I ODBIERZ JUŻ JUTRO</h1>
            <p>Kup nowego Peugeot dopasowanego do Twoich potrzeb za pośrednictwem naszej strony internetowej lub w wybranym salonie sprzedaży.</p>
        </div>

        <div className='offer-cards'>
            <div className='offer-one-card'>
                <img src={card1} alt='1'></img>
                <h2>Oleje</h2>
                <p>Poznaj wszystkie zalety PEUGEOT w zaciszu własnego domu.Bezzwłocznie odkryj i zamów swoje następne auto.</p>
                <Link to='/oleje'>kliknij</Link>
            </div>

            <div className='offer-one-card'>
                <img src={card2} alt='1'></img>
                <h2>Hamulce</h2>
                <p>Poznaj wszystkie zalety PEUGEOT w zaciszu własnego domu.Bezzwłocznie odkryj i zamów swoje następne auto.</p>
                <Link to='/hamulce'>kliknij</Link>
            </div>

            <div className='offer-one-card'>
                <img src={card3} alt='1'></img>
                <h2>Opony</h2>
                <p>Poznaj wszystkie zalety PEUGEOT w zaciszu własnego domu.Bezzwłocznie odkryj i zamów swoje następne auto.</p>
                <Link to='/opony'>kliknij</Link>
            </div>
        </div>
    </div>
  )
}

export default Offer