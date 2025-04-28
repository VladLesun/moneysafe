import { financeControl } from './finance/financeControl.js';
import { reportControl } from './report/reportControl.js';

const init = () => {
	financeControl();
	reportControl();
};

init();
