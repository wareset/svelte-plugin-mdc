import { get } from 'svelte/store';
import { MDC, TARGETS } from './constants';
import { mdc_name } from './util';

export function init(target) {
  const cname = mdc_name(target);
  const mdc = TARGETS.has(target) && get(TARGETS.get(target));
  if (!mdc || !(mdc instanceof MDC[cname])) (() => new MDC[cname](target))();
  return TARGETS.get(target); // || writable(null);
}
