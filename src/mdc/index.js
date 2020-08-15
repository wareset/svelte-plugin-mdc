export function classes(base = '', props = {}) {
  let res = base;
  Object.keys(props).forEach(v => {
    if (v === 'style') return;
    (v === 'class' && (res += ` ${props[v]}`)) ||
      (!!(props[v] + 0) && (res += ` ${base}--${v}`));
  });
  return res;
}

function hash(str) {
  let hash = 5381;
  let i = str.length;
  while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
  return hash >>> 0;
}
export const uid = () => 'mdc-' + hash('' + Math.random());

export default function mdc(node, args) {
  function update(args) {
    // console.log('mdc update', args);
  }

  function destroy() {
    console.log('mdc destroy');
  }

  update(args);
  return { update, destroy };
}
