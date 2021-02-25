import React, { Component } from 'react';
import preloadAudio from '../sounds/preloadAudio';

export default class Preloader extends Component {
  constructor() {
    super();
    this.state = {
        open: false,
    }
  }


  hide() {
    this.setState({
        open: false,
    });
  }

  show() {
      this.setState({
          open: true,
      });
  }

  componentDidMount() {
    this.show();

    const preloaderWrapper = document.querySelector('.preloader__wrapper');
    const trexImg = document.querySelector('.trex__img');
    const preloadMessage = document.querySelector('.preload__message');


    if (trexImg) {
      let posStay = 5;
      let trexMoveImg = -100;
      let posCount = -100;
      function dinoMoving() {
        trexMoveImg += posCount;
        posCount *= -1;
        trexImg.style.backgroundPositionX = `${trexMoveImg}px`;
      }
      const dinoMoveIn = setInterval(() => { dinoMoving() }, 150);
      setTimeout(() => {
        clearInterval(dinoMoveIn);
        trexImg.style.backgroundPositionX = `${posStay}px`;
        preloadMessage.classList.add('preload__message--on')
      }, 2000);
      /*let dinoMoveOut;
      setTimeout(() => {
        trexImg.classList.add('trex__img--out');
        preloadAudio();
        dinoMoveOut = setInterval(() => { dinoMoving() }, 150);
        preloaderWrapper.classList.add('preloader__off');
      }, 3500)
      setTimeout(() => {
        clearInterval(dinoMoveOut);
        preloaderWrapper.remove()
      }, 7000);*/
    }
  }

  render() {
    function preloaderClick() {
      if (document.querySelector('.preload__message--on')) {
        preloadAudio();
      }
    }

    return (
      <div className="preloader__wrapper" onClick={preloaderClick}>
        <div className="trex__img trex__img--in"></div>
        <div className="preload__message">click</div>
      </div>
    )
  }
}