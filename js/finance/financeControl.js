import { covertStringNumber } from '../modules/convertStringNumber.js';
import {
	financeAmountNode,
	financeFormNode,
	typeOperations,
} from '../vars/const.js';

let amount = 0;

financeAmountNode.textContent = `${amount.toLocaleString()} ₽`;

export const financeControl = () => {
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
};
