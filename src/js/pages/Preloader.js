import React, { Component } from 'react'

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
    const trexImg = document.querySelector('.trex__img');
    const preloaderWrapper = document.querySelector('.preloader__wrapper')
    console.log(trexImg);
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
      }, 2100);
      let dinoMoveOut;
      setTimeout(() => {
        trexImg.classList.add('trex__img--out');
        dinoMoveOut = setInterval(() => { dinoMoving() }, 150);
        preloaderWrapper.classList.add('preloader__off');
      }, 3500)
      setTimeout(() => {
        clearInterval(dinoMoveOut);
        preloaderWrapper.remove()
      }, 7000);
    }
  }

  render() {
    return (
      <div className="preloader__wrapper">
        <div className="trex__img trex__img--in"></div>
      </div>
    )
  }
}



{/*import React from 'react'

export default function Preloader() {
  function trexIn() {
    console.log('asdasdasd')
  }
  return (
    <div className="preloader__wrapper" onClick={trexIn}>
      <div className="trex__img trex__img--in"></div>
    </div>
  )
}
*/}