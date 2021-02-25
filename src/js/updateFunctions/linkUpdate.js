export const linkUpdate = (appData) => {
  const linksList = document.querySelectorAll('.menu__link')
  const pageName = window.location.pathname.slice(1);
  const pageIndex = appData.pages.indexOf(pageName);
  linksList[pageIndex].classList.add('current-link');
}

export default linkUpdate;