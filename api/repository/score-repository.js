const collection = 'score';

class ScoreRepository {
	constructor(repo) {
		this.repository = repo;
	}

	count = (query, success, error) => {
		this.repository.count(collection, query, success, error);
	};

	countAll = (success, error) => {
		this.repository.count(collection, {}, success, error);
	};

	find = (query, success, error) => {
		this.repository.find(collection, query, success, error);
	};

	findAll = (success, error) => {
		this.repository.find(collection, {}, success, error);
	};

	insert = (obj, success, error) => {
		this.repository.insert(collection, obj, success, error);
	};

	remove = (obj, success, error) => {
		this.repository.remove(collection, obj, success, error);
	};

	update = (obj, success, error) => {
		const upd = {
			_id: obj._id,
			update: { ...obj }
		};
		this.repository.update(collection, upd, success, error);
	};
}

export default ScoreRepository;
