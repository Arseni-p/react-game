import React, { Component } from 'react';



export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    };
  }

  render() {
    return (
        <div>
          <header className="header__wrapper">
            <nav>
              aaaaaaaaaaaaaaaaaaaaaaaa
            </nav>
          </header>
        </div>
    )
  }
}
/*
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../../pages/home/';
import Game from '../../pages/game/Game';
import Settings from '../../pages/settings/Settings';
import Stats from '../../pages/stats/Stats';

<Router>
        <div>
          <header className="header__wrapper">
            <nav>
              <div className="main__logo">
                <p>HEADER</p>
              </div>
              <ul>
                <li>
                  <Link to='/' >Home</Link>
                </li>
                <li>
                  <Link to='/game' >Game</Link>
                </li>
                <li>
                  <Link to='/settings' >Settings</Link>
                </li>
                <li>
                  <Link to='/stats' >Stats</Link>
                </li>
              </ul>
            </nav>
          </header>
        
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path='/Game'>
              <Game />
            </Route>
            <Route path='/Settings'>
              <Settings />
            </Route>
            <Route path='/Stats'>
              <Stats />
            </Route>
          </Switch>
        </div>
      </Router>
*/
