<script>
  import mdc, { classes, uid } from '../..';

  export let id = 'mdc-switch-' + uid();
  export let checked;
  export let group = [];
  $: if (!Array.isArray(group)) group = [];
  // $$restProps: raised, unelevated, outlined, dense
  $: disabled = !!($$props.disabled + 0);

  $: console.log('Switch', checked, group);
</script>

<div
  class={classes('mdc-switch', $$restProps)}
  on:change
  use:mdc={{ checked, disabled }}>
  <div class="mdc-switch__track" />
  <div class="mdc-switch__thumb-underlay">
    <div class="mdc-switch__thumb" />
    <input
      {id}
      type="checkbox"
      {disabled}
      bind:checked
      bind:group
      class="mdc-switch__native-control"
      role="switch" />
  </div>
</div>
