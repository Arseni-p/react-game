import React, { Component } from 'react';
import Home from './Home';
import Game from './Game';
import Settings from './Settings';
import Stats from './Stats';
import Footer from '../blocks/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import currentLinkView from '../logic/currentLinkView';
import updateLang from '../logic/updateLang';
import linkHoverAudio from '../sounds/linkHoverAudio';
export default class PagesComponents extends Component {
  constructor() {
    super();
    this.state = {
        open: false,
    }
  }

  componentDidMount() {
    const headerWrapper = document.querySelector('.header__wrapper');
    updateLang(headerWrapper);

    window.addEventListener('mouseover', (event) => {
      if (
        window.event.target.closest('a') ||
        window.event.target.closest('button') ||
        window.event.target.closest('button')
        ) {
        linkHoverAudio()
      }
    })
  }

  render() {
    function handleClick(e) {
      e.preventDefault();
      currentLinkView();
    }


    return (
      <Router>
        <div className="app__wrapper">
          <header className="header__wrapper">
            <nav className="header__content menu__wrapper" onClick={handleClick}>
              <ul className="menu__list">
                <li className="menu__item">
                  <Link className="app-link" to='/' >
                    <span className="trex-logo"></span>
                    <span className="trex-text lang__trex-app">TREX APP</span>
                    </Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link menu__link--home lang__home-link" to='/' >Home</Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link menu__link--play lang__play-link" to='/game' >New game</Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link menu__link--settings lang__settings-link" to='/settings' >Settings</Link>
                </li>
                <li className="menu__item">
                  <Link className="menu__link menu__link--stats lang__stats-link" to='/stats' >Stats</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className="main__wrapper">
            <Switch>
              <Route path='/Game'>
                <Game />
              </Route>
              <Route path='/Settings'>
                <Settings />
              </Route>
              <Route path='/Stats'>
                <Stats />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
          </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    )
  }
}
