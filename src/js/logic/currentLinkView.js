import appData from '../data/appData';
import updateLink from './updateLink';

export const currentLinkView = () => {
  if (
    window.event.target.closest('.menu__link') || 
    window.event.target.closest('.app-link') || 
    window.event.target.closest('.home-menu__link')) {
    const currentLink = document.querySelector('.current-link');
    currentLink.classList.remove('current-link');
    updateLink(appData);
  }
}

export default currentLinkView;