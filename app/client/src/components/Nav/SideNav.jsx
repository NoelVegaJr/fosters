import { createPortal } from "react-dom"
const SideNav = (props) => {
  return (
    <div className={`w-full h-full fixed top-0 left-0 mt-20  `}>
      <div onClick={props.closeSideNav} className={`h-full w-full bg-violet-100 bg-opacity-50 ease-in-out duration-500 ${props.classes}`}/>
      <div className={`h-full w-3/4 fixed top-0 bg-slate-900 ${props.classes} ease-in-out duration-700 mt-20 `}>
        <ul className="text-violet-100 text-lg font-semibold">
          <li className="p-6 border-b border-b-violet-900">Login</li>
          <li className="p-6 border-b border-b-violet-900">Register</li>
          <li className="p-6 border-b border-b-violet-900">Adopt</li>
        </ul>
      </div>
    </div>
  )
}

export default SideNav