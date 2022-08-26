import React from 'react'
import {ReactComponent as PawIcon} from '../assets/images/footprint.svg';

const Logo = ({ children }) => {
  return (
    <div className="text-white text-xl logo flex gap-3 items-center ">
      Mia's Kitties<PawIcon src={PawIcon} fill="white"  className="h-8"/>
    </div>
  )
}

export default Logo