import React from 'react'
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import "./nav.css"
function Navbar() {
const[home,nothome]=useState(true)

  return (
    <div >
      <nav className={home?'navbar backgroun' :'navbar background'}>
        <div className='navlist'>
        <div className='logo'>
       <img src={require('./top.jpg')} alt='Picture'></img>
      <h1>GITAGPT</h1>
      </div>
     <li onClick={()=>nothome(true)}><NavLink to="/Home">Home</NavLink></li>
        <li onClick={()=>nothome(false)}><NavLink to="/">About</NavLink></li>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
