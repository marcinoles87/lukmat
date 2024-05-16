import React from 'react'

import import1 from '../img/import1.avif'
import import2 from '../img/import2.jpg'

function Import
() {
  return (
    <div className='import-container'>
        <div className='import-header'>
            <h1>NAJLEPSZA OFERTA DOTYCZACA SPROWADZANIA AUT</h1>
            <p>Odkryj wszystkie zalety współpracy bez wychodzenia z domu i zamów wymarzony model w dowolnej chwili.</p>
        </div>

        <div className='import-cards'>
            <div className='import-card'>
                <img src={import1} alt='import'></img>
                <h2>Bez względu na wielkośc</h2>
                <p>Odkryj wszystkie zalety współpracy bez wychodzenia z domu i zamów wymarzony model w dowolnej chwili.</p>
            </div>

            <div className='import-card'>
            <img src={import2} alt='import'></img>
                <h2>Współpraca</h2>
                <p>Odkryj wszystkie zalety współpracy bez wychodzenia z domu i zamów wymarzony model w dowolnej chwili.</p>
            </div>

           

            
            
        </div>

    </div>
  )
}

export default Import
