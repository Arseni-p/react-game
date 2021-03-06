export const playSoundFunc = (currSettings, soundName, action) => {
  if (currSettings.sound) {
    if (action === 'jump') {
      soundName.loop = false;
    } else {
      soundName.loop = true;
    }
    soundName.currentTime = 0;
    soundName.volume = +currSettings.soundVolume;
    if (soundName.volume > 0) {
      soundName.play();
    } else {
      soundName.pause();
    }

    


  }
}

export default playSoundFunc;