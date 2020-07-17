import { get } from 'svelte/store';
import { MDC, TARGETS } from './constants';
import { init } from './init';
import { mdc_name, uid } from './util';

const TAB_BARS = new WeakMap();

function mdc_parent(target, type) {
  let parent = target;
  while (parent.parentElement) {
    parent = parent.parentElement;
    if (mdc_name(parent) === type) return parent;
  }
  return null;
}

const F = (MDC) => MDC.getDefaultFoundation();
const FA = (MDC_or_F) => MDC_or_F.adapter || F(MDC_or_F).adapter;

export function fixes(self) {
  console.log('fixes', self);
  const root = self.root || self.root_;
  if ('id' in self && !self.id) self.id = uid();

  // Fix if MDC is MDCFormField
  (() => {
    if (!(self instanceof MDC.MDCFormField)) return;
    console.log('fix_MDCFormField');
    if (TARGETS.has(self.input)) return;
    self.input = undefined;
    [...root.children].some((el) => (mdc_name(el) && init(el) ? 1 : 0));
  })();

  // Fix if parent is MDCFormField
  (() => {
    const parent = self.root.parentElement;
    if (mdc_name(parent) !== 'MDCFormField') return;
    if (TARGETS.has(parent) && TARGETS.get(parent).input === self) return;
    const formField = get(init(parent));
    console.log('fix_MDCFormField parent', formField);
    formField.input = self;
    const label = parent.querySelector('label');
    const nativeControl = self.nativeControl_ || root;
    if (label && nativeControl) {
      label.setAttribute('for', nativeControl.id || (nativeControl.id = uid()));
    }
  })();

  // Fix if MDC is MDCSlider
  (() => {
    if (!(self instanceof MDC.MDCSlider)) return;
    FA(self).notifyChange(), FA(self).notifyInput();
  })();

  // Fix if MDC is MDCTab
  (() => {
    if (!(self instanceof MDC.MDCTab)) return;
    const target_TabBar = mdc_parent(root, 'MDCTabBar');
    if (!target_TabBar) return;
    const MDCTabBar = get(init(target_TabBar));

    console.log(MDCTabBar);

    const children = [...root.parentElement.children];
    const tabs = children.map((el) => get(init(el)));
    const tabList = MDCTabBar.tabList || MDCTabBar.tabList_;
    tabList.splice(0, tabList.length, ...tabs);

    fixes(MDCTabBar);
  })();

  // Fix if MDC is MDCTabBar
  (() => {
    if (!(self instanceof MDC.MDCTabBar)) return;
    const tabList = self.tabList || self.tabList_;
    let index = -1;
    tabList.forEach((MDC_tab, k) => {
      TAB_BARS.set(MDC_tab, self);
      if (!MDC_tab.active) return;
      console.log(MDC_tab);
      index = k;
      F(MDC_tab).handleClick(), FA(self).activateTabAtIndex(k);
    });
    FA(self).notifyTabActivated(index);
    if (index >= 0 || !tabList.length) return;
    F(tabList[0]).handleClick(), FA(self).notifyTabActivated(0);
  })();
}

export function fixes_on_destroy(self) {
  console.log('fixes_on_destroy', self);
  // const root = self.root || self.root_;

  // Fix if MDC is MDCTab
  (() => {
    if (!(self instanceof MDC.MDCTab)) return;
    const MDCTabBar = TAB_BARS.get(self);
    TAB_BARS.delete(self);
    if (!MDCTabBar || !TARGETS.has(MDCTabBar.root)) return;

    console.log(MDCTabBar);

    const tabList = MDCTabBar.tabList || MDCTabBar.tabList_;
    if (!tabList) return;
    const tabs = tabList.filter((mdc, k) => {
      const is = mdc !== self;
      if (!is && mdc.active) FA(MDCTabBar).activateTabAtIndex((k || 1) - 1);
      return is;
    });
    tabList.splice(0, tabList.length, ...tabs);
    fixes(MDCTabBar);
  })();
}
