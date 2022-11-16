import React from 'react'
import Sheet from '../Sheet/Sheet'
import Access from "./Views/Access/Access"
import "./Home.css"

export default function Home() {
  return (
    <div className='Home'>
        <header>
            <div className='row'>
                <h1>Welcome, Username!</h1> {/* User name prop */}
            </div>
            <Access/>
        </header>
        <section>
          {/* Carrusel */}
        </section>
        {/* Sheet */}
    </div>
  )
}