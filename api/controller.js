import Service from './service.js';
import ScoreController from './controller/score-controller.js';

export default {
	init: () => {
		const serv = new Service();
		return {
			score: new ScoreController(serv.score)
		};
	}
};
