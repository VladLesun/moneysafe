import { reformatDate } from '../modules/reformatDate.js';
import { reportOperationListNode, typeOperations } from '../vars/const.js';

export const renderReport = data => {
	reportOperationListNode.innerHTML = '';

	const reportRows = data.map(
		({ type, amount, description, category, date }) => {
			const reportRow = document.createElement('tr'),
				reportCategoryTd = document.createElement('td'),
				reportAmountTd = document.createElement('td'),
				reportDescriptionTd = document.createElement('td'),
				reportDateTd = document.createElement('td'),
				reportActionTd = document.createElement('td'),
				reportRemoveTd = document.createElement('td'),
				reportRemoveRow = document.createElement('button');

			reportRow.classList.add('report__row');
			reportCategoryTd.classList.add('report__cell');
			reportAmountTd.classList.add('report__cell', 'report__cell_amount');
			reportDescriptionTd.classList.add('report__cell');
			reportDateTd.classList.add('report__cell');
			reportActionTd.classList.add('report__cell');
			reportRemoveTd.classList.add('report__action-cell');
			reportRemoveRow.classList.add('report__button', 'report__button_table');

			reportCategoryTd.textContent = category;
			reportAmountTd.innerHTML = `${amount.toLocaleString()}&nbsp;₽`;
			reportDescriptionTd.textContent = description;
			reportDateTd.textContent = reformatDate(date);
			reportActionTd.textContent = typeOperations[type];
			reportRemoveRow.innerHTML = '&#10006';

			reportRemoveTd.append(reportRemoveRow);
			reportRow.append(
				reportCategoryTd,
				reportAmountTd,
				reportDescriptionTd,
				reportDateTd,
				reportActionTd,
				reportRemoveTd
			);

			return reportRow;
		}
	);

	reportOperationListNode.append(...reportRows);
};
