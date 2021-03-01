import React, { Component } from 'react';
import Settings from './Settings';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import updateLang from '../logic/updateLang';
import currentLinkView from '../logic/currentLinkView';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      rules: 'Run, Dino, run ! ! !',
      controls: [
        ['arrow-right', '', 'Move right'],
        ['arrow-left', '', 'Move left'],
        ['arrow-up', '', 'Move up'],
        ['arrow-down', '', 'Move down'],
        ['e-btn', 'E', 'Action']
      ],
      description: 'description__on'
    }

    this.aboutInfo = this.aboutInfo.bind(this);
  }

  aboutInfo() {
    const descritptionText = document.querySelector('.home-menu__rules--description');
    descritptionText.classList.toggle('description__on');
  }

  componentDidMount() {
    const homePageWrapper = document.querySelector('.home-menu__wrapper');
    updateLang(homePageWrapper);
  }

  render() {
    const controlImgClass = 0;
    const controlImgContent = 1;
    const controlText = 2;

    return (
      <div className="home-menu__wrapper">
        <div className="home-page__content">
          <h1 className="home-page__title page__title lang__home--title">Home page</h1>
          <div className="home-page__menu--wrapper">
            <div className="home-menu__list--wrapper">
              <ul className="home-menu__list" onClick={currentLinkView}>
                <li className="home-menu__item">
                  <Link className="home-menu__link lang__play-link" to='/game' >Play</Link>
                </li>
                <li className="home-menu__item">
                    <Link className="home-menu__link lang__settings-link" to='/settings' >Settings</Link>
                </li>
                <li className="home-menu__item">
                  <Link className="home-menu__link lang__stats-link" to='/stats' >Stats</Link>
                </li>
                <li className="home-menu__item rules-item">
                  <p className="home-menu__rules lang__rules-link" onClick={this.aboutInfo}>Rules</p>
                  <p className="home-menu__rules--description lang__rules-description">{this.state.rules}</p>
                </li>
              </ul>
            </div>
            <div className="home-menu__controls--wrapper">
              <h3 className="home-menu__controls home-menu__controls--title lang__controls">Controls</h3>
              <ul className="controls__list">
                {this.state.controls.map((item, index) => (
                  <li className="controls__item" key={index}>
                    <span className={`controls__img ${item[controlImgClass]} lang__${item[controlImgClass]}`}>{item[controlImgContent]}</span>
                    <span className={`controls__text lang__text--${item[controlImgClass]}`}>{item[controlText]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
