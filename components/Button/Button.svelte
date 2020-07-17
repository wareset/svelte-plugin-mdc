<script>
  import mdc, { classes } from '../..';

  export let icon, label, iconTrailing;
  // $$restProps: raised, unelevated, outlined, dense
  $: disabled = !!($$props.disabled + 0);
</script>

<button
  class="mdc-ripple {classes('mdc-button', $$restProps)}"
  on:click
  {disabled}
  use:mdc>
  <div class="mdc-button__ripple" />
  <span />
  {#if icon}
    <i class="material-icons mdc-button__icon" aria-hidden="true">{icon}</i>
  {/if}
  {#if label}
    <span class="mdc-button__label">{label}</span>
  {/if}
  {#if iconTrailing}
    <i class="material-icons mdc-button__icon" aria-hidden="true">
      {iconTrailing}
    </i>
  {/if}
</button>
