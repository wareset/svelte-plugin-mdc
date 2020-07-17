<script>
  import mdc, { classes } from '../..';

  export let label = '';
  export let value, min, max, step;
  // $$restProps: discrete, markers, disabled
  $: discrete = !!($$props.discrete + 0);
  $: markers = !!($$props.markers + 0);
  $: disabled = !!($$props.disabled + 0);

  $: min = +min || 0;
  $: max = +max || 100;
  $: step = +step || 5;
  $: value = +value || 0;

  $: console.log('Slider', value);

  function change(e) {
    value = e.detail.value;
  }
  function input(e) {
    value = e.detail.value;
  }
</script>

<style>
  :global(.mdc-slider) {
    margin-right: -15px;
  }
</style>

<div
  class={classes('mdc-slider', $$restProps)}
  tabindex="0"
  role="slider"
  on:change={change}
  on:input={input}
  class:mdc-slider--discrete={discrete || markers}
  class:mdc-slider--display-markers={markers}
  aria-valuemin={min}
  aria-valuemax={max}
  aria-disabled={disabled}
  aria-valuenow={value}
  data-step={step}
  aria-label={label}
  use:mdc={{ value, min, max, step }}>
  <div class="mdc-slider__track-container">
    <div class="mdc-slider__track" />
    {#if markers}
      <div class="mdc-slider__track-marker-container" />
    {/if}
  </div>
  <div class="mdc-slider__thumb-container">
    {#if discrete || markers}
      <div class="mdc-slider__pin">
        <span class="mdc-slider__pin-value-marker" />
      </div>
    {/if}
    <svg class="mdc-slider__thumb" width="21" height="21">
      <circle cx="10.5" cy="10.5" r="7.875" />
    </svg>
    <div class="mdc-slider__focus-ring" />
  </div>
</div>
