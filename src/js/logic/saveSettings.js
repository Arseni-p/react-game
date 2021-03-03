import updateLang from './updateLang';

export const saveSettings = () => {
  const localSettings = localStorage.getItem('settings');
  const currSettings = JSON.parse(localSettings);
  const modeList = document.querySelectorAll('.mode__input');
  const levelList = document.querySelectorAll('.level__input');
  const langList = document.querySelectorAll('.language__input');
  const soundVol = document.querySelector('.sound__input');
  const musicVol = document.querySelector('.mus__input');

  modeList.forEach(item => {
    if (item.checked) {
      return currSettings.mode = item.value
    }
  });

  levelList.forEach(item => {
    if (item.checked) {
      return currSettings.level = item.value
    }
  })

  langList.forEach(item => {
    if (item.checked) {
      return currSettings.lang = item.value
    }
  })

  currSettings.soundVolume = (+soundVol.value / 10).toFixed(1)
  currSettings.musicVolume = (+musicVol.value / 10).toFixed(1)

  localStorage.setItem('settings', JSON.stringify(currSettings));
  const appWrapper = document.querySelector('.app__wrapper');
  updateLang(appWrapper);
}

export default saveSettings;