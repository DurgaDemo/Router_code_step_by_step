import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {

  const navigate=useNavigate()

  function ToNavigate(url){
    navigate(url)
  }

  
  return (
    <div>
        <h2>Home Page</h2>
        {/* <button onClick={()=>{navigate('/about')}}>Go to About Page</button><br/>
        <button onClick={()=>{navigate('/filter')}}>Go to Filter Page</button> */}

        <button onClick={()=>ToNavigate('./about')}>Go to About Page</button><br/>
        <button onClick={()=>ToNavigate('./filter')}>Go to Filter Page</button>
      </div>
  )
}

export default Home