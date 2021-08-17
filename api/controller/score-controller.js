import Constants from '../constants.js';

class ScoreController {
	constructor(service) {
		this.service = service;
	}

	countAll = (req, res) => {
		this.service.countAll(
			(data) => {
				res.json(data);
			},
			(err) => {
				console.log(err);
				res.status(400).json(err);
			}
		);
	};

	find = (req, res) => {
		this.service.find(
			{ score: req.params.score },
			(data) => {
				if (!data.length) {
					console.log('Nothing returned');
					redirect();
					return;
				}
				res.json(data);
			},
			(err) => {
				console.log(err);
				redirect();
			}
		);
	};

	findAll = (req, res) => {
		this.service.findAll(
			(data) => {
				res.json(data);
			},
			(err) => {
				console.log(err);
				res.status(400).json(err);
			}
		);
	};

	insert = (req, res) => {
		this.service.insert(
			req.body,
			(data) => {
				res.json(data);
			},
			(err) => {
				console.log(err);
				res.status(400).json(err);
			}
		);
	};
}

export default ScoreController;
