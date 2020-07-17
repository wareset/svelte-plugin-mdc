<script>
  import { onMount } from 'svelte/internal';
  import mdc, { classes, uid } from '../..';

  export let id = 'mdc-radio-' + uid();
  export let name = id;
  export let value = name;
  export let checked = false;
  export let group = '';

  // $$restProps: raised, unelevated, outlined, dense
  $: disabled = !!($$props.disabled + 0);

  $: console.log('Radio', id, checked);

  function change(e) {
    if (typeof e === 'object') checked = e.target.checked;
    group = checked ? value : '' + group;
  }
  onMount(() => {
    setTimeout(() => change());
  });
</script>

<div
  class={classes('mdc-radio', $$restProps)}
  on:change
  use:mdc={{ checked, disabled }}>
  <input
    type="radio"
    class="mdc-radio__native-control"
    {id}
    {value}
    {name}
    {checked}
    {disabled}
    on:change={change} />
  <div class="mdc-radio__background">
    <div class="mdc-radio__outer-circle" />
    <div class="mdc-radio__inner-circle" />
  </div>
  <div class="mdc-radio__ripple" />
</div>
