import appData from '../data/appData';
import updateLink from './updateLink';

export const updateCurrLink = () => {
  updateLink(appData);
}

export default updateCurrLink;