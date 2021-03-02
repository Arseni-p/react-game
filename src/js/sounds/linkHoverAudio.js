import hoverLink from '../../assets/sounds/hover-link.mp3'

export const linkHoverAudio = () => {
  const localSettings = localStorage.getItem('settings');
  const currSettings = JSON.parse(localSettings);
  if (currSettings.sound) {
    const linkAudio = new Audio(hoverLink);
    linkAudio.currentTime = 0;
    linkAudio.soundVolume = currSettings.volume;
    linkAudio.play();
  }
}

export default linkHoverAudio;

