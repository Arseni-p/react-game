import langApp from '../data/langApp';

export const updateLang = (wrapper) => {
  const localSettings = localStorage.getItem('settings');
  if ( localSettings ) {
    const currSettings = JSON.parse(localSettings)
    const lang = currSettings.lang;
    for (let key in langApp) {
      let elem = wrapper.querySelector('.lang__' + key);
      if (elem && langApp[key][lang]) {
        elem.textContent = langApp[key][lang]
      }
    }
  }
}

export default updateLang;