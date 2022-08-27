import { useState } from 'react';
import SideNav from "./SideNav";

const HamburgerMenu = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNavHandler = () => {
    console.log("clicked")
    setShowSideNav(prev => !prev)
  }

  const closeSideNavHandler = () => {
    console.log("clicked")
    setShowSideNav(false)
  }

  const classes = showSideNav ? 'translate-x-0': "-translate-x-full"

  return (
    <>
      <SideNav classes={classes} closeSideNav={toggleSideNavHandler}/>
      <button onClick={toggleSideNavHandler} className='flex flex-col gap-1'>
        <div className="w-8 h-1 bg-violet-900"></div>
        <div className="w-8 h-1 bg-violet-900"></div>
        <div className="w-8 h-1 bg-violet-900"></div>
      </button>
    </>
    

  )
}

export default HamburgerMenu;