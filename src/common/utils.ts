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
  o._n = calcSalt(forceNumber(_n || 249));
  o._ns = calcSalt(num || 47);
  o._ts = text || '';
  const hash = createHash('sha256');
  hash.update(JSON.stringify(o));
  return hash.digest('hex');
};

const coefficient = 1000000;

const calcSalt = (n: number): string => {
  const x = Math.trunc(Math.sin(n) * coefficient);
  const ac = n > -1 && n < 1 ? Math.acos(n) : Math.acos(1 / n);
  const aci = Math.trunc(ac * coefficient);
  return (x + aci).toString();
};

export const testHash = (object: InputObject): boolean =>
  object._h ===
  saltHash(object, forceNumber(process.env.S_NUM), process.env.S_TEXT);

export const forceNumber = (num: any): number => Number(num) || 0;
