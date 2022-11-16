import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className='Sidebar'>
            <p>Project Name</p>
        <div style={{"width":"100%"}}>
          <button className='classic-button'>Log Out</button>
        </div>
    </div>
  )
}
