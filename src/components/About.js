import React from 'react'

import { Link } from 'react-router-dom'
function About() {
  return (
    <div>
        <h2>About Page</h2>

           <ul>
           <li><Link to='/user/anil'>Anil</Link></li>
           <li><Link to='/user/peter'>Peter</Link></li> 
           </ul>
  
        </div>
  )
}

export default About