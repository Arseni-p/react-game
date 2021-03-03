export const updateSettingsPage = () => {
  const localSettings = localStorage.getItem('settings');
  const currSettings = JSON.parse(localSettings);
  const currModeElem = document.querySelector(`.mode__input--${currSettings.mode}`);
  const currLevelElem = document.querySelector(`.level__input--${currSettings.level}`);
  const currLangElem = document.querySelector(`.language__input--${currSettings.lang}`);
  const currSoundValue = document.querySelector('.sounds__value');
  const currMusValue = document.querySelector('.music__value');
  const soundInput = document.querySelector('.sound__input');
  const musInput = document.querySelector('.mus__input');
  currModeElem.defaultChecked = 'true';
  currLevelElem.defaultChecked = 'true';
  currLangElem.defaultChecked = 'true';
  soundInput.value = +currSettings.soundVolume * 10;
  currSoundValue.textContent = +currSettings.soundVolume * 10;
  musInput.value = +currSettings.musicVolume * 10;
  currMusValue.textContent = +currSettings.musicVolume * 10;
}

export default updateSettingsPage