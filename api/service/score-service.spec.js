describe('Test the ScoreService', () => {
	const Service = require('../service');
	const scoreService = new Service().score;
	const emptyRequest = {
		message: 'Empty request body'
	};
	const scoreTest = '??';
	const expectError = 'Expected Error';

	test('It should response the countAll method', (done) => {
		scoreService.countAll(
			(data) => {
				expect(data).toBeGreaterThanOrEqual(0);
				done();
			},
			(error) => done(error)
		);
	});

	test('It should response the count method with empty request', (done) => {
		scoreService.count(
			{},
			(data) => {
				expect(data).toBeGreaterThanOrEqual(0);
				done();
			},
			(error) => done(error)
		);
	});

	test('It should response the count method', (done) => {
		scoreService.count(
			{ shrt: 'TEST' },
			(data) => {
				expect(data).toEqual(0);
				done();
			},
			(error) => done(error)
		);
	});

	test('It should response the findAll method', (done) => {
		scoreService.findAll(
			(data) => {
				expect(data).toBeDefined();
				done();
			},
			(error) => done(error)
		);
	});

	test('It should response the find method with empty request', (done) => {
		scoreService.find(
			{},
			(data) => {
				expect(data).toBeDefined();
				done();
			},
			(error) => done(error)
		);
	});

	test('It should response the find method', (done) => {
		scoreService.find(
			{ shrt: 'TEST' },
			(data) => {
				expect(data).toEqual([]);
				done();
			},
			(error) => done(error)
		);
	});

	test('It should response the update method with empty request', (done) => {
		scoreService.update(
			{},
			() => done(expectError),
			(error) => {
				expect(error).toEqual(emptyRequest);
				done();
			}
		);
	});

	test('It should response the find and update methods', (done) => {
		scoreService.find(
			{},
			(obj) => {
				const [el] = [...obj];
				expect(el).toBeDefined();
				scoreService.update(
					el,
					(data) => {
						expect(data).toBeDefined();
						done();
					},
					(error) => done(error)
				);
			},
			(error) => done(error)
		);
	});

	test('It should response the remove method with empty request', (done) => {
		scoreService.remove(
			{},
			() => done(expectError),
			(error) => {
				expect(error).toEqual(emptyRequest);
				done();
			}
		);
	});

	test('It should response the find and remove methods', (done) => {
		scoreService.find(
			{},
			(obj) => {
				const [el] = [...obj];
				expect(el).toBeDefined();
				scoreService.remove(
					el,
					(data) => {
						expect(data).toBeDefined();
						done();
					},
					(error) => done(error)
				);
			},
			(error) => done(error)
		);
	});
});
