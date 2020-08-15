import { init, MDC as components } from './lib/index';
import { F, FA } from './lib/fixes';
export { filter_mdc_classes, uid, classes } from './lib/util';

export default function mdc(target, props = {}) {
  let MDC;
  let props_cached = props;

  function update(props = {}) {
    if (!MDC) return;
    if (props === props_cached) props_cached = {};

    // console.log('update', props, props_cached);
    Object.keys(props).forEach((prop) => {
      if (!(prop in MDC) /* && !(prop in MDC.foundation_.adapter_)*/) return;
      if (props_cached[prop] === props[prop]) return;
      // console.log(prop, MDC[prop], props[prop]);

      // Fix menu and others
      if (prop === 'open' && !props[prop]) {
        (prop = 'close'), (props[prop] = true);
      } else if (prop === 'close' && !props[prop]) {
        (prop = 'open'), (props[prop] = true);
      }
      // if ((prop === 'open' || prop === 'close') && F(MDC).isOpen) {
      //   prop = F(MDC).isOpen() ? 'close' : 'open';
      //   console.log(1111, F(MDC).isOpen(), prop);
      //   F(MDC)[prop]();
      //   return;
      // }

      if (typeof F(MDC)[prop] === 'function') F(MDC)[prop](props[prop]);
      else if (MDC[prop] !== props[prop]) MDC[prop] = props[prop];

      // Fix checkbox
      if (prop === 'checked' && 'indeterminate' in MDC) {
        MDC.indeterminate = !(typeof props[prop] === 'boolean');
      }

      props_cached = props;
    });
  }

  const unsubscribe = init(target).subscribe((_MDC) => {
    MDC = _MDC;
    console.log(MDC);
    if (!MDC) return;
    update(props_cached);
  });

  function destroy(props = {}) {
    unsubscribe();
    if (MDC && MDC.destroy) MDC.destroy();
    console.log('update', props);
  }

  return { update, destroy };
}

mdc.components = components;

export { mdc };
