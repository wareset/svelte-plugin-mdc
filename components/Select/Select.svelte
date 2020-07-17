<script>
  import mdc, { classes } from '../..';
  import Menu from '../Menu';
  import List, { ListItem } from '../List';
  import FloatingLabel from '../TextField/_FloatingLabel.svelte';

  export let label = 'Select value';

  export let icon;
  export let helper = 'helper';
  // $$restProps: mini, exited...
  // extended is auto
  $: dummy = !!($$props.dummy + 0);
  $: outlined = !!($$props.outlined + 0);
  $: required = !!($$props.required + 0);
  $: disabled = !!($$props.disabled + 0);
</script>

<style>
  :global(.mdc-select.mdc-select--outlined .mdc-floating-label) {
    line-height: 1.375em;
  }

  :global(.mdc-select--activated .mdc-select__dropdown-icon) {
    transform: rotate(180deg) translateY(0) !important;
  }

  :global(.mdc-select .mdc-select__icon--leading) {
    line-height: 0.625;
  }

  :global(.mdc-select--focused .mdc-select-helper-text) {
    opacity: 1;
  }

  :global(.mdc-select-helper-text) {
    position: absolute;
    right: 5px;
    bottom: 4px;
  }

  :global(.mdc-select > div) {
    min-width: 100%;
  }
</style>

<div
  class={classes('mdc-select', $$restProps)}
  class:mdc-select--with-leading-icon={icon}
  use:mdc>

  {#if icon}
    <i class="material-icons mdc-select__icon mdc-select__icon--leading">
      {icon}
    </i>
  {/if}

  <div
    class="mdc-select__anchor"
    aria-required={required}
    aria-disabled={disabled}>
    <span class="mdc-select__ripple" />
    <span class="mdc-select__selected-text" />
    <i class="mdc-select__dropdown-icon" />

    <FloatingLabel {...{ ...$$props, label }} />
    <span class="mdc-line-ripple" />

    <div class="mdc-select-helper-text">{helper}</div>
  </div>

  <Menu class="mdc-select__menu">
    <List class="mdc-list" role="select">
      {#if !dummy}
        <li class="mdc-list-item mdc-list-item--selected" data-value="" />
      {/if}
      <slot />
    </List>
    <!--
    <ul class="mdc-list">
      <li class="mdc-list-item" data-value="grains">
        <span class="mdc-list-item__text">
          Bread, Cereal, Rice, and Pasta
        </span>
      </li>
      <li class="mdc-list-item" data-value="vegetables">
        <span class="mdc-list-item__text">
          Vegetables
        </span>
      </li>
      <li class="mdc-list-item" data-value="fruit">
        <span class="mdc-list-item__text">
          Fruit<TestTab />
-->
  </Menu>
</div>
