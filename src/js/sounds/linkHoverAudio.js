import hoverLink from '../../assets/sounds/hover-link.mp3'

export const linkHoverAudio = () => {
  const localSettings = localStorage.getItem('settings');
  const currSettings = JSON.parse(localSettings);
  const linkAudio = new Audio(hoverLink);

  if (currSettings.sound) {
    linkAudio.currentTime = 0;
    linkAudio.volume = +currSettings.soundVolume;
    linkAudio.play();
  }
}

export default linkHoverAudio;

