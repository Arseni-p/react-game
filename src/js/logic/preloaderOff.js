import preloadAudio from '../sounds/preloadAudio';
import playMusic from '../sounds/playMusic';

export const preloaderOff = () => {
  let posStay = 5;
  let trexMoveImg = -100;
  let posCount = -100;
  const preloaderWrapper = document.querySelector('.preloader__wrapper');
  const trexImg = document.querySelector('.trex__img');
  const preloadMessage = document.querySelector('.preload__message--on');
  trexImg.classList.add('trex__img--in');
  preloadAudio()

  function dinoMoving() {
    trexMoveImg += posCount;
    posCount *= -1;
    trexImg.style.backgroundPositionX = `${trexMoveImg}px`;
  }

  const dinoMoveIn = setInterval(() => { dinoMoving() }, 100);
  setTimeout(() => {
    clearInterval(dinoMoveIn);
    trexImg.style.backgroundPositionX = `${posStay}px`;
    preloadMessage.classList.add('preload__message--off');
  }, 1900);

  let dinoMoveOut;
  setTimeout(() => {
    trexImg.classList.add('trex__img--out');
    dinoMoveOut = setInterval(() => { dinoMoving() }, 100);
    preloaderWrapper.classList.add('preloader__off');
    playMusic()
  }, 3500);
  
  setTimeout(() => {
    clearInterval(dinoMoveOut);
    preloaderWrapper.remove()
  }, 7000);
}

export default preloaderOff;