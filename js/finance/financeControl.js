import { covertStringNumber } from '../modules/convertStringNumber.js';
import { getData, postData } from '../modules/service.js';
import { financeAmountNode, financeFormNode } from '../vars/const.js';
import { financeDatalistControl } from './financeDatalistControl.js';

let amount = 0;

financeAmountNode.textContent = amount;

const addNewOperation = async event => {
	event.preventDefault();

	const typeOperation = event.submitter.dataset.typeOperation;

	// отправка данных
	const financeFormData = Object.fromEntries(new FormData(financeFormNode));
	financeFormData.type = typeOperation;

	const newOperation = await postData('/finance', financeFormData);

	const changeAmount = Math.abs(covertStringNumber(newOperation.amount));

	if (typeOperation === 'income') amount += changeAmount;
	if (typeOperation === 'expenses') amount -= changeAmount;

	financeAmountNode.textContent = `${amount.toLocaleString()} ₽`;
	financeFormNode.reset();
	financeDatalistControl();
};

export const financeControl = async () => {
	financeDatalistControl();

	const operations = await getData('/finance');

	amount = operations.reduce((acc, item) => {
		if (item.type === 'income') {
			acc += covertStringNumber(item.amount);
		}

		if (item.type === 'expenses') {
			acc -= covertStringNumber(item.amount);
		}

		return acc;
	}, 0);

	financeAmountNode.textContent = `${amount.toLocaleString()} ₽`;

	financeFormNode.addEventListener('submit', addNewOperation);
};
