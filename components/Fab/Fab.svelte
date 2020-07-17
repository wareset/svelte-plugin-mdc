<script>
  import mdc, { classes } from '../..';

  export let icon, label, iconTrailing;
  // $$restProps: mini, exited...
  // extended is auto
  $: disabled = !!($$props.disabled + 0);
</script>

<button
  class="mdc-ripple {classes('mdc-fab', $$restProps)}"
  on:click
  class:mdc-fab--extended={label}
  {disabled}
  aria-label={label}
  use:mdc>
  <div class="mdc-fab__ripple" />
  <span />
  {#if icon}
    <i class="mdc-fab__icon material-icons">{icon}</i>
  {/if}
  {#if label}
    <span class="mdc-fab__label">{label}</span>
  {/if}
  {#if iconTrailing}
    <i class="mdc-fab__icon material-icons">{iconTrailing}</i>
  {/if}
</button>
