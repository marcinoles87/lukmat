import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div className='main-container'>

      <div className='main-info'>
        <h1>STAWIAMY NA JAKOŚĆ</h1>
      <h2>Chcesz nas poznać bliżej </h2>
      <Link to={'/historia'}><button>Kliknij</button></Link>
      
      </div>
      
    </div>
  )
}

export default Main