import tiger from '../../assets/sounds/music/eye-of-the-tiger.mp3';
import believer from '../../assets/sounds/music/believer.mp3';
import billiejean from '../../assets/sounds/music/billie-jean.mp3';
import getlucky from '../../assets/sounds/music/get-lucky.mp3';
import mortalkombat from '../../assets/sounds/music/mortal-kombat.mp3';
import partyupup from '../../assets/sounds/music/party-up-up.mp3';
import thefinalcountdown from '../../assets/sounds/music/the-final-countdown.mp3';
import whatislove from '../../assets/sounds/music/what-is-love.mp3';

export const playMusic = (index) => {
  let localSettings = localStorage.getItem('settings');
  let currSettings = JSON.parse(localSettings);
  const musicArray = [tiger, believer, billiejean, getlucky, mortalkombat, partyupup, thefinalcountdown, whatislove];
  if (!index) {
    const min = 0;
    index = Math.floor(min + Math.random() * (musicArray.length + 1 - min));
    console.log('index', index)
  };

  function playMusicFun(playMusicOn, currSettings) {
    if (currSettings.sound) {
      playMusicOn.loop = true;
      playMusicOn.currentTime = 0;
      playMusicOn.volume = +currSettings.musicVolume;
      if (playMusicOn.volume > 0) {
        playMusicOn.play();
      } else {
        playMusicOn.pause();
      }
    }
  }

  const playMusicOn = new Audio(musicArray[index])
  playMusicFun(playMusicOn, currSettings)
  document.addEventListener('beforeunload', () => {
    playMusicOn.pause();
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('.settings__submit')) {
      playMusicOn.pause();
      localSettings = localStorage.getItem('settings');
      currSettings = JSON.parse(localSettings);
      playMusicFun(playMusicOn, currSettings)
    }
  })

}
export default playMusic;