import React from 'react'
import Sheet from '../Sheet/Sheet'
import "./Home.css"
import Gas from "./Views/Gas/Gas"

export default function Home() {
  return (
    <div className='Home'>
        <header>
            <div className='row'>
                <h1>Welcome, Username!</h1> {/* User name prop */}
            </div>
            <Gas/>
        </header>
        <section>
          {/* Carrusel */}
        </section>
        {/* Sheet */}
    </div>
  )
}