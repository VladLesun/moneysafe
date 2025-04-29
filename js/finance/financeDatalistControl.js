import { getData } from '../modules/service.js';
import { financeCategoryList } from '../vars/const.js';

const getCategories = category => {
	const option = document.createElement('option');
	option.value = category;

	return option;
};

export const financeDatalistControl = async () => {
	financeCategoryList.innerHTML = '';

	const categories = await getData('/categories');

	const expensesCategories = categories.expenses.map(getCategories);
	const incomeCategories = categories.income.map(getCategories);

	financeCategoryList.append(...expensesCategories, ...incomeCategories);
};
