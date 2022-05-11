import React from 'react'
import { Link } from "react-router-dom";




function Nav({logIn, logStatus}) {
  console.log(logIn)

  const logOut = () => {
    logStatus(false)
  }

  return (
    <div className='nav-container'>
        <div className='title-container'>
          <h2 className='site-title'>Node Book</h2>
        </div>
        <ul className='nav-links'>
             {logIn === false ? <Link to="/" className='links'>Register</Link> : null}
            {logIn === false ? <Link to="/login" className='links'>Login</Link> : <Link to="/login" className='links' onClick={logOut}>Log-out</Link> }
            <Link to="/shop" className='links'>Shop</Link>
        </ul>
    </div>
  )
}

export default Nav