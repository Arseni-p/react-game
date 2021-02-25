import React from 'react';
import appData from '../data/appData';
import linkUpdate from '../updateFunctions/linkUpdate';

export const currentLinkView = () => {
  if (window.event.target.closest('.menu__link') || window.event.target.closest('.app-link')) {
    const currentLink = document.querySelector('.current-link');
    currentLink.classList.remove('current-link');
    linkUpdate(appData);
  }
}

export default currentLinkView;