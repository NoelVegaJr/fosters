import React from 'react'
import Logo from '../components/Logo'
import Navigation from '../components/Nav/Navigation'
import HamburgerMenu from '../components/Nav/Hamburger';

const Navbar = () => {
  return (
    <>
      <div className='bg-violet-800 h-20 px-6 flex justify-between items-center sticky top-0 mb-8 z-50'>
        <Logo></Logo>
        <Navigation />
      </div>
      
    </>
  )
}

export default Navbar