import React from 'react'
import "./Sheet.css"

export default function Sheet({closeSheet}) {
  return (
    <div className='Sheet'>
      <div className='sheet-box'>
        <header>
          <h2>Title</h2>
          <button className='close-button' onClick={() => closeSheet()}>
            <span></span>
          </button>
        </header>
      </div>
    </div>
  )
}
