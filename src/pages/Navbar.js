import React, {useState} from "react"
import { NavLink } from "react-router-dom"


const Navbar = () => {
  const [navbarOpen, setNavbarOpen]=useState(false)
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
  ]
  const handleToggle=()=>{
    setNavbarOpen(prev => !prev)
  }
  const closeMenu = () => {
    setNavbarOpen(false)
  }
  return (
    <nav className="navBar">
      <button onClick={handleToggle}>{navbarOpen ? "Close": "Open"}</button>
      <ul className={`menuNav${navbarOpen ? " showMenu" : ""}`}>
        {links.map(link => {
          return <li key={link.id}>
            <NavLink 
            to={link.path} 
            className={({ isActive }) => isActive ? "active-link" : undefined}
            onClick={()=> closeMenu()}>
              {link.text}
            </NavLink>
          </li>
        })}
      </ul>
    </nav>
  )

}
export default Navbar