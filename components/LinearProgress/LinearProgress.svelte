<script>
  import mdc, { classes } from '../..';

  export let label = '';
  export let value;
  // $$restProps: indeterminate, reversed, closed

  $: value = +value || 0.5;

  $: console.log('LinearProgress', value);
</script>

<div
  role="progressbar"
  class={classes('mdc-linear-progress', $$restProps)}
  aria-label={label}
  aria-valuemin="0"
  aria-valuemax="1"
  aria-valuenow={value}
  use:mdc={{ value }}>
  <div class="mdc-linear-progress__buffer">
    <div class="mdc-linear-progress__buffer-bar" />
    <div class="mdc-linear-progress__buffer-dots" />
  </div>
  <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
    <span class="mdc-linear-progress__bar-inner" />
  </div>
  <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
    <span class="mdc-linear-progress__bar-inner" />
  </div>
</div>
