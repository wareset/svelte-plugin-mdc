<script context="module">
export const STATIC = [
  'Button',
  'Card',
  'Elevation',
  'FAB',
  'ImageList',
  'LayoutGrid',
  'Typography',
];

// export const DYNAMIC = Object.keys(mdc.components)
//   .map((v) => v.slice(3))
//   .sort();

// export const LIST = [...STATIC, ...DYNAMIC].sort();
</script>

<script>
import { onMount } from 'svelte';
export let segment;
console.log(1111, segment);

function testFn(e) {
  console.log(e);
}

let open = false;
const is = (a = '', b = '') => a.toLowerCase() === b.toLowerCase();

let tag = 'h1';
let tag_i = 1;
onMount(() => {
  setInterval(() => {
    if (tag_i === 8) tag_i = 1;
    else tag_i++;
    tag = 'h' + tag_i;
    if (tag_i === 7) tag = 'button';
    if (tag_i === 8) tag = 'input';
    // console.log(tag);
  }, 1000);
});
</script>

<template lang="pug">
slot
Node(tag!="{tag}") Hello
//- TopAppBar(on:nav!="{() => open = !open}")
  div.ta-c.w-100(slot="align-center")
    small Material-components and use-function for svelte

  span(slot="align-end")
    a.mdc-top-app-bar__action-item.mdc-button(href="https://github.com/wareset/svelte-use-material", target="_blank") GITHUB

//- Drawer(modal,
  on:opened!="{() => open = true}",
  on:closed!="{() => open = false}",
  title="Menu", subtitle="components",
  {open}, scrim)
  nav.mdc-list(use:mdc, role="listbox",
    on:action!="{() => open = false}")
    a.mdc-list-item(href!=".",
      class:mdc-list-item--selected!="{!segment}")
      span.mdc-list-item__ripple
      span.mdc-list-item__text HOME

    +each('LIST as v, k')
      a.mdc-list-item(href!="{v}",
        class:mdc-list-item--selected!="{is(segment, v)}")
        span.mdc-list-item__ripple
        span.mdc-list-item__text {v}
  br

  //- ListGroup
    ListDivider
    div.mdc-list-item: a.mdc-button.mdc-button--raised.w-100(href="static") static
    List(on:action!="{() => open = false}")
      +each('STATIC as v, k')
        a.td-n(href!="static/{v}")
          ListItem(
          selected!="{is(segment, v) || (!k && !segment)}",
          label!="{v}")
    br
    ListDivider
    div.mdc-list-item: a.mdc-button.mdc-button--raised.w-100(href="dynamic") dynamic
    nav.mdc-list(use:mdc, role="listbox",
      on:action!="{() => open = false}")
      +each('DYNAMIC as v, k')
        a.mdc-list-item(href!="dynamic/{v}",
          class:mdc-list-item--selected!="{is(segment, v) || (!k && !segment)}")
          span.mdc-list-item__ripple
          span.mdc-list-item__text {v}
    br
    ListDivider

//- .mdc-drawer-app-content.mdc-top-app-bar--fixed-adjust
  main.main-content: .demo-content-transition
    slot
</template>

<style lang="less">
:global {
  body {
    font-family: Roboto, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .td-n {
    text-decoration: none !important;
  }

  .ta-c {
    text-align: center !important;
    text-align-last: center !important;
  }

  .w-100 {
    width: 100% !important;
  }
}
</style>
