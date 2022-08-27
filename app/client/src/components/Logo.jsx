import React from 'react'
import {ReactComponent as PawIcon} from '../assets/images/footprint.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="text-white text-xl logo flex gap-3 items-center ">
      Kendra's Kitties<PawIcon src={PawIcon} fill="white"  className="h-8"/>
    </Link>
  )
}

export default Logo