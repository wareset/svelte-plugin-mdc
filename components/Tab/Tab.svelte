<script>
  import mdc, { classes } from '../..';

  import Indicator from './_Indicator.svelte';

  export let icon, label;
  // $$restProps: active, stacked...
  $: active = !!($$props.active + 0);
  $: contentWidthIndicator = !!($$props.contentWidthIndicator + 0);
  $: disabled = !!($$props.disabled + 0);
</script>

<button
  class={classes('mdc-tab', $$restProps)}
  role="tab"
  aria-selected={active}
  tabIndex={active ? '0' : '-1'}
  {disabled}
  use:mdc>
  <span class="mdc-tab__content">
    {#if icon}
      <span class="mdc-tab__icon material-icons" aria-hidden="true">
        {icon}
      </span>
    {/if}
    <span class="mdc-tab__text-label">{label}</span>
    {#if contentWidthIndicator}
      <Indicator {active} />
    {/if}
  </span>
  {#if !contentWidthIndicator}
    <Indicator {active} />
  {/if}
  <span class="mdc-tab__ripple" />
</button>
