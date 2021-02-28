import React, { Component } from 'react';
import Settings from './Settings';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import updateLang from '../logic/updateLang';


export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      rules: 'Run, Dino, run ! ! !'
    }
  }

  componentDidMount() {
    const homePageWrapper = document.querySelector('.home-menu__wrapper');
    updateLang(homePageWrapper);
  }

  render() {


    return (
      <div className="home-menu__wrapper">
        <div className="home-page__content">
          <h1 className="home-page__title page__title lang__home--title">Home page</h1>
          <div className="home-page__menu--wrapper">
            <div className="home-menu__list--wrapper">
              <ul className="home-menu__list">
                <li className="home-menu__item">
                  <Link className="home-menu__link lang__play-link" to='/game' >Play</Link>
                </li>
                <li className="home-menu__item">
                    <Link className="home-menu__link lang__settings-link" to='/settings' >Settings</Link>
                </li>
                <li className="home-menu__item">
                  <Link className="home-menu__link lang__stats-link" to='/stats' >Stats</Link>
                </li>
                <li className="home-menu__item">
                  <p className="lang__rules-link">Rules</p>
                  <p className="lang__rules-description">{this.state.rules}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


/*
<div className="home-page__menu--wrapper">
            <div className="home-menu__wrapper">
            <ul className="home-menu__list">
                  <li className="home-menu__item">
                    <Link className="home-menu__link" to='/game' >Play</Link>
                  </li>
                  <li className="home-menu__item">
                    <Link className="home-menu__link" to='/settings' >Settings</Link>
                  </li>
                  <li className="home-menu__item">
                    <Link className="home-menu__link" to='/stats' >Stats</Link>
                  </li>
                </ul>
            </div>

          </div>
          
          <div className="home-page__menu--wrapper">
            <div className="home-menu">
                
              <ul className="menu__list">
                  <li className="menu__item">
                    <Link className="app-link" to='/' >
                      <span className="trex-logo"></span>
                      TREX APP</Link>
                  </li>
                  <li className="menu__item">
                    <Link className="menu__link" to='/' >Home</Link>
                  </li>
                  <li className="menu__item">
                    <Link className="menu__link" to='/game' >New game</Link>
                  </li>
                  <li className="menu__item">
                    <Link className="menu__link" to='/settings' >Settings</Link>
                  </li>
                  <li className="menu__item">
                    <Link className="menu__link" to='/stats' >Stats</Link>
                  </li>
                </ul>
            </div>              
          </div>

*/