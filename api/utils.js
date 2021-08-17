const { createHash } = await import('crypto');

const saltHash = (object, num, text) => {
	const o = { ...object };
	o._n = calcSalt(o._n || 249);
	o._ns = calcSalt(num || 47);
	o._ts = text || '';
	delete o._h;
	const hash = createHash('sha256');
	hash.update(JSON.stringify(o));
	return hash.digest('hex');
};

const calcSalt = (n) => {
	const x = Math.sin(n) * 10000;
	const ac = n > -1 && n < 1 ? Math.acos(n) : Math.acos(1 / n);
	return (x + ac).toFixed(10);
};

export const testHash = (object) => object._h === saltHash(object, process.env.S_NUM | 0, process.env.S_TEXT);
