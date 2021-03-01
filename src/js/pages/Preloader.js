import React, { Component } from 'react';
//import preloadAudio from '../sounds/preloadAudio';
import preloaderOff from '../logic/preloaderOff';
//import getSettings from '../logic/getSettings';
import updateSettings from '../logic/updateSettings';
import startSettings from '../data/startSettings';
export default class Preloader extends Component {
  constructor() {
    super();
    this.state = {
      playMode: false
    }
  }

  componentDidMount() {
    const preloadMessage = document.querySelector('.preload__message');
    if (preloadMessage) {
      setTimeout(() => { preloadMessage.classList.add('preload__message--on') }, 100);
    }
  }

  render() {
    const localSettings = localStorage.getItem('settings');

    if ( localSettings ) {
      const currSettings = JSON.parse(localSettings)
      this.state.playMode = currSettings.playMode;
    } else {
      updateSettings(startSettings);
    }

    if (!this.state.playMode) {
      function preloaderClick() {
        if (document.querySelector('.preload__message--on')) {
          preloaderOff();
        }
      }
  
      return (
        <div className="preloader__wrapper" onClick={preloaderClick}>
          <div className="trex__img"></div>
          <div className="preload__message">click</div>
        </div>
      )
    } else {
      return false
    }
  }
}