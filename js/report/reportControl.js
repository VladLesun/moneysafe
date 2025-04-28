import { getDate } from '../modules/getData.js';
import {
	financeReportBtnNode,
	reportDatesNode,
	reportNode,
} from '../vars/const.js';
import { renderReport } from './renderReport.js';

const closeReport = ({ target }) => {
	if (
		target.closest('.report__close') ||
		(!target.closest('.report') && target !== financeReportBtnNode)
	) {
		gsap.to(reportNode, {
			opacity: 0,
			scale: 0,
			duration: 0.5,
			ease: 'power2.in',
			onComplete() {
				reportNode.style.visibility = 'hidden';
			},
		});
		document.removeEventListener('click', closeReport);
	}
};

const openReport = () => {
	reportNode.style.visibility = 'visible';

	gsap.to(reportNode, {
		opacity: 1,
		scale: 1,
		duration: 0.5,
		ease: 'power2.out',
	});

	document.addEventListener('click', closeReport);
};

export const reportControl = () => {
	financeReportBtnNode.addEventListener('click', async () => {
		openReport();
		const data = await getDate('/test');
		renderReport(data);
	});

	reportDatesNode.addEventListener('submit', async event => {
		event.preventDefault();

		const formDate = Object.fromEntries(new FormData(reportDatesNode));

		const searchParams = new URLSearchParams();

		if (formDate.startDate) {
			searchParams.append('startDate', formDate.startDate);
		}

		if (formDate.endDate) {
			searchParams.append('endDate', formDate.endDate);
		}

		const queryString = searchParams.toString();

		const url = queryString ? `/test?${queryString}` : '/test';

		const data = await getDate(url);
		renderReport(data);
	});
};
