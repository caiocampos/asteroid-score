import AbsRepository from './repository/abs-repository.js';
import ScoreRepository from './repository/score-repository.js';

class Repository {
	constructor() {
		const absRepository = new AbsRepository();
		this.score = new ScoreRepository(absRepository);
	}
}

export default Repository;
