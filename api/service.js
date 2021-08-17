import Constants from './constants.js';
import Repository from './repository.js';
import ScoreService from './service/score-service.js';

class Service {
	constructor() {
		const repo = new Repository();
		this.score = new ScoreService(repo.score, Constants.messages);
	}
}

export default Service;
