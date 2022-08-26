import React from 'react'
import {createPortal} from 'react-dom';

const overlayRoot = document.getElementById('overlays');

const Backdrop = (props) => {
  return (
    createPortal(
      <div onClick={props.onClose} className="h-screen w-full z-10 bg-black opacity-50 fixed"></div>
      , overlayRoot
    )
  )
}

export default Backdrop