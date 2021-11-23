import { createHash } from 'crypto';

interface DigestibleObject {
  _n?: string | number;
  _ns?: string;
  _ts?: string;
}

export interface InputObject extends DigestibleObject {
  _h?: string;
}

const saltHash = (object: InputObject, num: number, text: string): string => {
  const { _n, _h, ...origin } = { ...object };
  const o = origin as DigestibleObject;
  o._n = calcSalt(forceNumber(object._n || 249));
  o._ns = calcSalt(num || 47);
  o._ts = text || '';
  const hash = createHash('sha256');
  hash.update(JSON.stringify(o));
  return hash.digest('hex');
};

const calcSalt = (n: number): string => {
  const x = Math.sin(n) * 10000;
  const ac = n > -1 && n < 1 ? Math.acos(n) : Math.acos(1 / n);
  return (x + ac).toFixed(10);
};

export const testHash = (object: InputObject): boolean =>
  object._h ===
  saltHash(object, forceNumber(process.env.S_NUM), process.env.S_TEXT);

export const forceNumber = (object: any): number => object | 0;
