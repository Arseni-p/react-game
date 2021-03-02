import React, { Component } from 'react';
import updateLang from '../logic/updateLang';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxSound: 10,
    }
  }

  componentDidMount() {
    const settingsWrapper = document.querySelector('.settings__wrapper');
    updateLang(settingsWrapper);
  }

  render() {
    return (
      <div className="settings__wrapper">
        <h2 className="settings__title page__title lang__settings--title">Settings</h2>
        <form className="settings__form">
          <ul className="settings__list">
            <li className="settings__item">
              <p className="settings__item--title lang__mode">Mode</p>
              <div className="settings__value--wrapper">
                <input className="mode__input mode__setting mode__input--classic visually-hidden" type="radio" name="mode" id="mode__classic" value="classic"></input>
                <label className="mode__label mode__label__classic lang__classic" htmlFor="mode__classic">Classic</label>
                
                <input className="mode__input mode__setting mode__input--bchb visually-hidden" type="radio" name="mode" id="mode__bchb" value="bchb"></input>
                <label className="mode__label mode__label__bchb lang__bchb" htmlFor="mode__bchb">BChB</label>

                <input className="mode__input mode__setting mode__input--navalny visually-hidden" type="radio" name="mode" id="mode__navalny" value="navalny"></input>
                <label className="mode__label mode__label__navalny lang__navalny" htmlFor="mode__navalny">Navalny</label>

                <input className="mode__input mode__setting mode__input--messi visually-hidden" type="radio" name="mode" id="mode__messi" value="messi"></input>
                <label className="mode__label mode__label__messi lang__messi" htmlFor="mode__messi">Messi</label>
              </div>
            </li>
            
            <li className="settings__item">
              <p className="settings__item--title lang__level">Level</p>
              <div className="settings__value--wrapper">
                <input className="level__input level__setting level__input--easy visually-hidden" type="radio" name="level" id="level__easy" value="easy" ></input>
                <label className="level__label level__label__easy lang__easy" htmlFor="level__easy">Easy</label>
                
                <input className="level__input level__setting level__input--medium visually-hidden" type="radio" name="level" id="level__medium" value="medium"></input>
                <label className="level__label level__label__medium lang__medium" htmlFor="level__medium">Medium</label>

                <input className="level__input level__setting level__input--hard visually-hidden" type="radio" name="level" id="level__hard" value="hard"></input>
                <label className="level__label level__label__hard lang__hard" htmlFor="level__hard">Hard</label>
              </div>
            </li>
            
            <li className="settings__item">
              <p className="settings__item--title lang__language">Language</p>
              <div className="settings__value--wrapper">
                <input className="language__input language__setting language__input--eng visually-hidden" type="radio" name="language" id="language__eng" value="eng" ></input>
                <label className="language__label language__label__eng lang__eng" htmlFor="language__eng">Eng</label>
                
                <input className="language__input language__setting language__input--rus visually-hidden" type="radio" name="language" id="language__rus" value="rus"></input>
                <label className="language__label language__label__rus lang__rus" htmlFor="language__rus">Rus</label>
              </div>
            </li>

            <li className="settings__item">
              <p className="settings__item--title lang__sounds">Sounds</p>
              <div className="settings__value--wrapper">
                <span className="sounds__off"></span>
                <input type="range" min="0" max={this.state.maxSound} step="any"></input>
                <span className="sounds__value"></span>
              </div>
            </li>

            <li className="settings__item">
              <p className="settings__item--title lang__music">Music</p>
              <div className="settings__value--wrapper">
                <span className="music__off"></span>
                <input type="range" min="0" max={this.state.maxSound} step="any"></input>
                <span className="music__value"></span>
              </div>
            </li>
          </ul>
        </form>
      </div>
    )
  }
}
