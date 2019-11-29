import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tutorial from './pages/Tutorial'
import Game from './pages/Game'
import Result from './pages/Result'

export default () => 
  <BrowserRouter>
    <Switch name='http://localhost:3000'>
      <Route path="/" component={Home} exact />
      <Route path="/home" component={Home} />
      <Route path="/tutorial" component={Tutorial} />
      <Route path="/game" component={Game} />
      <Route path="/result" component={Result} />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>