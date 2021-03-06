import React, { Component } from 'react';
import gameStart from '../game/gameStart';
import trexClassic from '../../assets/img/trex-classic.png';
import trexBchb from '../../assets/img/trex-bchb.png';
import trexNavalny from '../../assets/img/trex-navalny.png';
import trexMessi from '../../assets/img/trex-messi.png';
import cactusClassic from '../../assets/img/cactus-classic.png';
import cactusBchb from '../../assets/img/cactus-bchb.png';
import cactusNavalny from '../../assets/img/cactus-navalny.png';
import cactusMessi from '../../assets/img/cactus-messi.png';


export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playMode: true,
      dinoMode: ['classic', 'bchb', 'navalny', 'messi'],
      currDino: [trexClassic, trexBchb, trexNavalny, trexMessi],
      currCactus: [cactusClassic, cactusBchb, cactusNavalny, cactusMessi],
      modeIndex: 0,
      points: 0,
    }
  }

  componentDidMount() {
    let localSettings = localStorage.getItem('settings');
    let currSettings = JSON.parse(localSettings);
    this.state.modeIndex = this.state.dinoMode.indexOf(currSettings.mode);
    const trexDino = document.querySelector('.game__dino');
    const cactus = document.querySelector('.cactus');
    trexDino.style.backgroundImage = `url(${this.state.currDino[this.state.modeIndex]})`;
    cactus.style.backgroundImage = `url(${this.state.currCactus[this.state.modeIndex]})`

    gameStart();

  }

  render() {


    return (
      <div className="game__wrapper">
        <div className="game__content">
          <div className="game__dino"></div>
          <div className="cactus"></div>
          <div className="ground"></div>
          <div className="points">{this.state.points}</div>
        </div>
      </div>
    )
  }
}

