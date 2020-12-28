import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Pomodoro from './pages/pomodoro_timer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div style={{margin :"10px", border :"2px solid black" , borderRadius :"5px"}}>
        <Switch>
          <Route path="/pomodoro_timer" component={ Pomodoro }/>
        </Switch>
      </div>
      
    </div>
  )
}

export default App
