<script>
  import { onMount } from 'svelte/internal';
  import mdc, { classes, uid } from '../..';

  export let id = 'mdc-checkbox-' + uid();
  export let value = id;
  export let checked;
  export let group = [];

  // $$restProps: raised, unelevated, outlined, dense
  $: disabled = !!($$props.disabled + 0);

  $: console.log('Checkbox', id, checked);

  function change(e) {
    if (typeof e === 'object') checked = e.target.checked;

    group = checked
      ? [...(group || []), value]
      : (group || []).filter((v) => v !== value);
  }
  onMount(() => {
    setTimeout(() => change());
  });
</script>

<div
  class={classes('mdc-checkbox', $$restProps)}
  on:change
  use:mdc={{ checked, disabled }}>
  <input
    type="checkbox"
    class="mdc-checkbox__native-control"
    {id}
    {value}
    {disabled}
    on:change={change} />
  <div class="mdc-checkbox__background">
    <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
      <path
        class="mdc-checkbox__checkmark-path"
        fill="none"
        d="M1.73,12.91 8.1,19.28 22.79,4.59" />
    </svg>
    <div class="mdc-checkbox__mixedmark" />
  </div>
  <div class="mdc-checkbox__ripple" />
</div>
