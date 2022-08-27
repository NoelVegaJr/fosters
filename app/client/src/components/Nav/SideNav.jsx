import { createPortal } from "react-dom"
import { Link } from 'react-router-dom';
const SideNav = (props) => {

  const closeSideNavHandler = () => {
    props.closeSideNav()
  }

  return (
    // <div className={`w-full h-full fixed top-0 left-0 mt-20 ease-in-out z-0 duration-500 ${props.classes} `}>
    <>
      <div onClick={closeSideNavHandler} className={`h-full w-full fixed mt-20 top-0 left-0 bg-violet-100 bg-opacity-50 ease-in-out duration-500 ${props.classes}`}/>
      <div className={`h-full w-3/4 fixed top-0 left-0 mt-20 bg-slate-900 ${props.classes} ease-in-out duration-700 `}>
        <ul className="text-violet-100 text-lg font-semibold">
          <li className="border-b border-b-violet-900"><Link onClick={closeSideNavHandler} className="block p-6" to="login">Login</Link></li>
          <li className="border-b border-b-violet-900"><Link onClick={closeSideNavHandler} className="block p-6" to="register">Register</Link></li>
          <li className="border-b border-b-violet-900"><Link onClick={closeSideNavHandler} className="block p-6" to="adopt">Adopt</Link></li>
        </ul>
      </div>
    </>

    // </div>
  )
}

export default SideNav