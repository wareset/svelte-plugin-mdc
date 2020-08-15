import { writable } from 'svelte/store';
import * as mcw from 'material-components-web';
// console.log(mcw);

import { TARGETS, MDC } from './constants';
import { mdc_name } from './util';

import { init } from './init';
import { fixes_on_init, fixes, fixes_on_destroy } from './fixes';

const MDCComponent = mcw.base.MDCComponent;
Object.defineProperty(MDCComponent.prototype, 'root', {
  configurable: true,
  enumerable: true,
  get() {
    return this.root_;
  },
  set(root) {
    this.root_ = root;

    // try {
    const cname = mdc_name(root);
    if (cname && this instanceof MDC[cname]) {
      const store = TARGETS.get(root) || writable(null);
      store.update((MDC) => {
        if (MDC !== this) {
          if (MDC && MDC.destroy) MDC.destroy();
          TARGETS.set(root, store);
        }
        return this;
      });
      fixes_on_init(this);
      setTimeout(() => fixes(this));
    }
    // } catch (err) {}
  },
});

const destroyOrigin = MDCComponent.prototype.destroy;
MDCComponent.prototype.destroy = function destroy(...a) {
  setTimeout(() => fixes_on_destroy(this));
  // fixes_on_destroy(this);
  // console.log('destroy', this);
  if (this instanceof MDC[mdc_name(this.root)]) TARGETS.delete(this.root);
  return destroyOrigin.bind(this)(...a);
};

const emitOrigin = MDCComponent.prototype.emit;
MDCComponent.prototype.emit = function emit(...a) {
  console.log('emit', a[0]);
  if (a[0].indexOf(':') > 0) {
    const b = [...a];
    b[0] = b[0].split(':')[1];
    emitOrigin.bind(this)(...b);
  }
  return emitOrigin.bind(this)(...a);
};

((res) => {
  Object.keys(mcw).forEach((dir) => {
    Object.keys(mcw[dir]).forEach((type) => {
      if (type.indexOf('MDC') || ~type.indexOf('Foundation')) return;
      if (mcw[dir][type] !== MDCComponent) res[type] = mcw[dir][type];
    });
  });

  // Fix MDCIconButton
  res.MDCIconButton = res.MDCIconButtonToggle;
  delete res.MDCIconButtonToggle;

  // Fix add MDCRippleSurface
  res.MDCRippleSurface = res.MDCRipple;

  // delete res.MDCMenu;
  // delete res.MDCMenuSurface;

  return res;
})(MDC);

export { MDC, TARGETS, mdc_name, init };
