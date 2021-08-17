import Express from 'express';
import Controller from './controller.js';

export default {
	init: (cors) => {
		const router = Express.Router();
		const controller = Controller.init();
		const scoreController = controller.score;

		router.options('/', cors);
		router.get('/@', scoreController.findAll);
		router.post('/', scoreController.insert);
		router.get('/:score', scoreController.find);

		return router;
	}
};
