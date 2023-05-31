import React from 'react'
import wh from '../photos/wh_logo_transparent_1.png'

const NavBar = () => {
  return (
    <nav id='anchor-nav'>
      <a className='home-link' aria-current='page' href='/'>
        <img id='nav-logo' src={wh} alt='logo'/>
      </a>
      {/* <div className='nav-links'>
        <a className='link' href='/who-we-are'>
          WHO ARE WE
        </a>
        <a className='link' href='/what-we-do'>
          WHAT DO WE DO
        </a>
      </div> */}
    </nav>
  )
}

export default NavBar
