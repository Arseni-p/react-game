import steps from '../../assets/sounds/trex-steps.mp3';
import voice from '../../assets/sounds/trex-voice.mp3';

export const preloadAudio = () => {
  const stepsSound = new Audio(steps);
  const voiceSound = new Audio(voice)
  stepsSound.currentTime = 0;
  voiceSound.currentTime = 0;
  //stepsSound.loop = true;
  stepsSound.play();

  setTimeout(() => {
    stepsSound.pause();
    voiceSound.play();
  }, 2000);
  setTimeout(() => {
    voiceSound.pause();
    stepsSound.play();
  }, 3500)
  setTimeout(() => {
    stepsSound.pause();
  }, 5500)
}

export default preloadAudio;