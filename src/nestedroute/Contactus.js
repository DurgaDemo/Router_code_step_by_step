import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Contactus() {
  return (
    <div>
      
     
   <h1> ContactUs Page</h1>
   <Link to='channel'>Channel</Link><br/>
   <Link to='company'>Company</Link><br/>
   <Link to='other'>Other</Link><br/>
   <Outlet/>
    </div>
  )
}

export default Contactus