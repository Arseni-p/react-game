import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import PagesComponents from './js/pages/PagesComponents';
import updateCurrLink from './js/pages/updateCurrLink';
import Preloader from './js/pages/Preloader';

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
});

ReactDOM.render(
  <React.StrictMode>
    <Preloader />
    <PagesComponents />
  </React.StrictMode>,
  document.getElementById('root'),
);

updateCurrLink();

document.addEventListener('click', () => {
  // console.log('move');
  // const playSound = new Audio(audio);
  // console.log(playSound)
  // if ( playSound.canPlayType('audio/mpeg') === 'probably' ) {
    //playSound.src = './steps.mp3';
    //playSound.src = "https://cdn.instructables.com/ORIG/FO7/STEA/GLKMTSJ1/FO7STEAGLKMTSJ1.mp3";
  // }
  // playSound.currentTime = 0;

  //var playPromise = playSound.play();

      // if (playPromise !== undefined) {
      //   playPromise
      //     .then(_ => {
      //       // Automatic playback started!
      //       // Show playing UI.
      //       console.log("audio played auto");
      //     })
      //     .catch(error => {
      //       // Auto-play was prevented
      //       // Show paused UI.
      //       console.log("playback prevented");
      //     });
      // }
  //     playSound.loop = true
  // playSound.play();
  /*const ctx = new AudioContext(); //(window.AudioContext || window.webkitAudioContext);
  let audio;

  fetch('./assets/sounds/steps.mp3')
    .then(data => data.arrayBuffer())
    .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
    .then(decodedAudio => {
      audio = decodedAudio;
    })

  function playback() {
    const playSound = ctx.createBufferSource();
    playSound.buffer = audio;
    playSound.connect(ctx.destination);
    playSound.start(ctx.currentTime);
  }

  playback()*/

  /*
  const ctx = new (window.AudioContext || window.webkitAudioContext);
  const osc = ctx.createOscillator();
  osc.connect(ctx.destination);
  osc.start(0);
  osc.stop(2);
  osc.onended = () => {
    console.log(ctx.state, ctx.destination)
  }

  const playSoundOn = new Audio;
    console.log(playSoundOn)
    if ( playSoundOn.canPlayType('audio/mpeg') === 'probably' ) {
      playSoundOn.src = `./assets/sounds/steps.mp3`;
    } else {
      console.log('no comprendo!')
    }
  
    function playSoundOnPlay() {
        playSoundOn.currentTime = 0;
        playSoundOn.play();
      }
    playSoundOnPlay();
*/
})
