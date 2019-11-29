import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'

export default () => 
  <BrowserRouter>
    <Switch name='http://localhost:3000'>
      <Route path="/" component={Home} exact />
      <Route path="/home" component={Home} />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>