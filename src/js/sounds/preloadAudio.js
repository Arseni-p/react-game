import audio from '../../assets/sounds/steps.mp3';

export const preloadAudio = () => {
  let trexMoveImg = -100;
  let posCount = -100;
  const preloaderWrapper = document.querySelector('.preloader__wrapper');
  const trexImg = document.querySelector('.trex__img');
  const preloadMessage = document.querySelector('.preload__message--on');
  trexImg.classList.add('trex__img--out');
  preloadMessage.classList.add('preload__message--off')

  function dinoMoving() {
    trexMoveImg += posCount;
    posCount *= -1;
    trexImg.style.backgroundPositionX = `${trexMoveImg}px`;
  }

  let dinoMoveOut = setInterval(() => { dinoMoving() }, 150);

  const playSound = new Audio(audio);
  playSound.currentTime = 0;
  playSound.play();

  setTimeout(() => { playSound.pause(); }, 2000);

  setTimeout(() => {
    preloaderWrapper.classList.add('preloader__off');
  }, 2500)
  setTimeout(() => {
    clearInterval(dinoMoveOut);
    preloaderWrapper.remove()
  }, 3000);

  

}

export default preloadAudio;


//console.log(playSound, playSound.muted, 'autoplay - ', playSound.autoplay)
