import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className='nav-container'>
        <div className='title-container'>
          <h2 className='site-title'>Node Book</h2>
        </div>
        <ul className='nav-links'>
            <Link to="/" className='links'>Register</Link>
            <Link to="/login" className='links'>Login</Link>
            <Link to="/shop" className='links'>Shop</Link>
        </ul>
    </div>
  )
}

export default Nav