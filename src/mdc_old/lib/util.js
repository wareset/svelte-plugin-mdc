import kebabCase from 'kebab-case';
import { MDC } from './constants';

function hash(str) {
  let hash = 5381;
  let i = str.length;
  while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
  return hash >>> 0;
}
export const uid = () => 'mdc-' + hash('' + Math.random());

export function classes(base = '', props = {}) {
  let res = base;
  Object.keys(props).forEach((v) => {
    (v === 'class' && (res += ` ${props[v]}`)) ||
      (!!(props[v] + 0) && (res += ` ${base}--${v}`));
  });
  return res;
}

export function filter_mdc_classes(target, isRipple = false) {
  if (!target) return [];
  let res = [...target.classList].filter(
    (v) => v.indexOf('mdc') === 0 && v.indexOf('--') < 0 && v.indexOf('__') < 0
  );
  if (!isRipple && res.length > 1) res = res.filter((v) => v !== 'mdc-ripple');

  return res;
}

export function mdc_name(target) {
  let res = filter_mdc_classes(target, true)
    .map((v) => 'MDC' + kebabCase.reverse(v).slice(3))
    .filter((v) => v in MDC);
  if (res.length > 1) res = res.filter((v) => v !== 'MDCRipple');
  if (res.length > 1) res = res.filter((v) => v !== 'MDCMenuSurface');
  // if (!res.length) throw new Error('Not MDC name', target);
  return res[0];
}
