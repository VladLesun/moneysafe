// finance
export const financeFormNode = document.querySelector('.finance__form'),
	financeAmountNode = document.querySelector('.finance__amount'),
	financeCategoryList = document.getElementById('categoryList');

// report
export const financeReportBtnNode = document.querySelector('.finance__report'),
	reportNode = document.querySelector('.report'),
	reportOperationListNode = document.querySelector('.report__operation-list'),
	reportDatesNode = document.querySelector('.report__dates');

// chart
export const generateChartButtonNode = document.getElementById(
	'generateChartButton'
);

// type operations
export const typeOperations = {
	income: 'Доход',
	expenses: 'Расход',
};
