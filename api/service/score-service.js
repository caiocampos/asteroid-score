class ScoreService {
	constructor(repo, msg) {
		this.repository = repo;
		this.msg = msg;
	}

	count = (query, success, error) => {
		this.repository.count(query, success, error);
	};

	countAll = (success, error) => {
		this.repository.countAll(success, error);
	};

	find = (query, success, error) => {
		this.repository.find(query, success, error);
	};

	findAll = (success, error) => {
		this.repository.findAll(success, error);
	};

	insert = (obj, success, error) => {
		if (!obj || !Object.entries(obj).length) {
			error(this.msg.emptyRequest);
			return;
		}
		this.repository.insert(obj, success, error);
	};

	remove = (obj, success, error) => {
		if (!obj || !Object.entries(obj).length) {
			error(this.msg.emptyRequest);
			return;
		}
		this.repository.remove(obj, success, error);
	};

	update = (obj, success, error) => {
		if (!obj || !Object.entries(obj).length) {
			error(this.msg.emptyRequest);
			return;
		}
		this.repository.update(obj, success, error);
	};
}

export default ScoreService;
