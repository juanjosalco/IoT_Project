import React from 'react'
import Sheet from '../Sheet/Sheet'
import "./Home.css"
import Lights from "./Views/Lights/Lights"

export default function Home() {
  return (
    <div className='Home'>
        <header>
            <div className='row'>
                <h1>Welcome, Username!</h1> {/* User name prop */}
            </div>
            <Lights/>
        </header>
        <section>
          {/* Carrusel */}
        </section>
        {/* Sheet */}
    </div>
  )
}