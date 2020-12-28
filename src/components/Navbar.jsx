import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{margin : "10px", display : "flex", flex :"wrap"}}>
      <Link style={{margin : "10px" , padding : "10px", border : "2px soild balck", borderRadius :"5px", backgroundColor :"cyan", color :"white", fontWeight :"bold", textDecoration :"none"  }} to="/pomodoro_timer">Promodoro Timer</Link>
    </div>
  )
}

export default Navbar
