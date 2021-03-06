import playSoundFunc from './playSoundFunc';
import dinoSteps from '../../assets/sounds/trex-steps.mp3';
import dinoJump from '../../assets/sounds/trex-jump.mp3';

export const playSteps = (action) => {
  let localSettings = localStorage.getItem('settings');
  let currSettings = JSON.parse(localSettings);

  const playDinoSteps = new Audio(dinoSteps);
  const playDinoJump = new Audio(dinoJump);
  if (action === 'run') {
    playSoundFunc(currSettings, playDinoSteps, action);
  }

  if (action === 'jump') {
    playSoundFunc(currSettings, playDinoJump, action);
  }

  // document.addEventListener('keydown', (event) => {
  //   if (event.code === 'ArrowUp' || event.code === 'ArrowDown') {
  //     playDinoSteps.pause();
  //   }
  // })

  document.addEventListener('keyup', (event) => {
    if (event.code === 'ArrowRight' || event.code === 'ArrowLeft' || event.code === 'ArrowDown') {
      playDinoSteps.pause();
    }
    if (event.code === 'ArrowUp' || event.code === 'ArrowDown') {
      //playDinoSteps.pause();
    }

    if ((event.code === 'ArrowRight' || event.code === 'ArrowLeft') && event.code === 'ArrowDown') {
      console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    }
  })
}

export default playSteps