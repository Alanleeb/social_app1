import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import NoMatch from './components/NoMatch'

const App = () => (
  <Switch>
    <Route exact path="/" components={Home} />
    <Route components={NoMatch} />
  </Switch>
)

export default App 