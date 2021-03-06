import classicSound from '../../assets/sounds/mode-trex.mp3';
import bchbSound from '../../assets/sounds/mode-bchb.mp3';
import navalnySound from '../../assets/sounds/mode-navalny.mp3';
import messiSound from '../../assets/sounds/mode-messi.mp3';

export const playMode = (indexMode) => {
  let localSettings = localStorage.getItem('settings');
  let currSettings = JSON.parse(localSettings);
  const modeSoundsArray = [classicSound, bchbSound, navalnySound, messiSound];

  const playModeSound = new Audio(modeSoundsArray[indexMode]);

  if (currSettings.sound) {
    playModeSound.currentTime = 0;
    playModeSound.volume = +currSettings.musicVolume;
    if (playModeSound.volume > 0) {
      playModeSound.play();
    } else {
      playModeSound.pause();
    }
  }
} 

export default playMode;