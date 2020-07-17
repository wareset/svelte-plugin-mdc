import { init } from './lib/index';
export { filter_mdc_classes, uid, classes } from './lib/util';

export default function svelteMaterialUse(target, _props = {}) {
  let MDC;
  let props = _props;

  function update(_props = {}) {
    props = _props;
    if (!MDC) return;

    // console.log('update', props, MDC);
    Object.keys(props).forEach((prop) => {
      if (!(prop in MDC) /* && !(prop in MDC.foundation_.adapter_)*/) return;
      // console.log(MDC[prop], props[prop]);

      // Fix menu and others
      if (prop === 'open' && !props[prop]) {
        (prop = 'close'), (props[prop] = true);
      } else if (prop === 'close' && !props[prop]) {
        (prop = 'open'), (props[prop] = true);
      }

      if (typeof MDC[prop] === 'function') MDC[prop](props[prop]);
      else if (MDC[prop] !== props[prop]) MDC[prop] = props[prop];

      // Fix checkbox
      if (prop === 'checked' && 'indeterminate' in MDC) {
        MDC.indeterminate = !(typeof props[prop] === 'boolean');
      }
    });
  }

  const unsubscribe = init(target).subscribe((_MDC) => {
    MDC = _MDC;
    console.log(MDC);
    if (!MDC) return;
    update(props);
  });

  function destroy(_props = {}) {
    unsubscribe();
    if (MDC && MDC.destroy) MDC.destroy();
    console.log('update', _props);
  }

  return { update, destroy };
}
