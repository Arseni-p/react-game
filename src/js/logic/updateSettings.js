export const updateSettings = (settings) => {
  localStorage.setItem('settings', JSON.stringify(settings))
}

export default updateSettings;