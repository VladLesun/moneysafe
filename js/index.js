import { covertStringNumber } from './modules/convertStringNumber.js';
import { getDate } from './modules/getData.js';
import { openReport } from './report/openReport.js';
import { renderReport } from './report/renderReport.js';
import {
	financeAmountNode,
	financeFormNode,
	financeReportBtnNode,
	reportDatesNode,
	typeOperations,
} from './vars/const.js';

let amount = 0;

financeAmountNode.textContent = `${amount.toLocaleString()} ₽`;

financeFormNode.addEventListener('submit', event => {
	event.preventDefault();

	const typeOperation = event.submitter.dataset.typeOperation;
	const incomeOperation = Object.keys(typeOperations)[0];
	const expensesOperation = Object.keys(typeOperations)[1];

	const changeAmount = Math.abs(
		covertStringNumber(financeFormNode.amount.value)
	);

	if (typeOperation === incomeOperation) amount += changeAmount;
	if (typeOperation === expensesOperation) amount -= changeAmount;

	financeAmountNode.textContent = `${amount.toLocaleString()} ₽`;
});

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
