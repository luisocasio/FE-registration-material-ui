import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './styles/style.scss'
import Landing from './pages/landing'
import Register from './pages/register'
import Login from './pages/login'

const App = () => {
  return (
    <Switch>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/'>
        <Landing />
      </Route>
    </Switch>
  )
}

export default App
