import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { DEFAULT_PATH } from './lib/paths'

import Header from './components/Header'
import Tiles from './components/CarTile/Tiles'



import './stylesheets/test.css'


ReactDOM.render((
    <BrowserRouter>
        <div className="app">
        <Header/>
        <Switch>
            <Route path={DEFAULT_PATH} render={() => (

                <Tiles/>


            )} />
        </Switch>
      </div>
    </BrowserRouter>
), document.getElementById('app'))
