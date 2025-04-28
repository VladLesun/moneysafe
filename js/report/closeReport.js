import { financeReportBtnNode, reportNode } from '../vars/const.js';

export const closeReport = ({ target }) => {
	if (
		target.closest('.report__close') ||
		(!target.closest('.report') && target !== financeReportBtnNode)
	) {
		reportNode.classList.remove('report__open');
		document.removeEventListener('click', closeReport);
	}
};
