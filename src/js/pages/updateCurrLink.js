import appData from '../data/appData';
import linkUpdate from '../updateFunctions/linkUpdate';

export const updateCurrLink = () => {
  linkUpdate(appData);
}

export default updateCurrLink;