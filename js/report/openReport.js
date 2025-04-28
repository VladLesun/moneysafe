import { reportNode } from '../vars/const.js';
import { closeReport } from './closeReport.js';

export const openReport = () => {
	reportNode.classList.add('report__open');

	document.addEventListener('click', closeReport);
};
