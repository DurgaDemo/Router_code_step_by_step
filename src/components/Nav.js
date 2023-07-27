import React from 'react'
// import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <div>

<ul className='nav_bar'>

  {/* <li><Link to='/'>Home</Link></li>
  <li><Link to='/about'>About</Link></li>
  <li><Link to='/contact'>Contact</Link></li> */} 


  <li><NavLink className="nav-bar-link" to='/'>Home</NavLink></li>
  <li><NavLink className="nav-bar-link" to='/about'>About</NavLink></li>
  <li><NavLink className="nav-bar-link" to='/contact'>Contact</NavLink></li>
  <li><NavLink className="nav-bar-link" to='/filter'>Filter</NavLink></li>
  <li><NavLink className="nav-bar-link" to='/contactus'>Contact Us</NavLink></li>


</ul>   
   
    </div>
  )
}

export default Nav