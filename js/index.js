import { financeControl } from './finance/financeControl.js';
import { financeDatalistControl } from './finance/financeDatalistControl.js';
import { reportControl } from './report/reportControl.js';

const init = () => {
	financeControl();
	reportControl();
	financeDatalistControl();
};

init();
