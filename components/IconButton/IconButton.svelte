<script>
  import mdc, { classes } from '../..';

  export let checked = false;
  export let icon, img;
  export let label = '';

  $: pressed = !!($$props.pressed + 0);
  $: iconToggle = $$props.iconToggle || $$props.icon;
  $: imgToggle = $$props.imgToggle || $$props.img;

  $: console.log('IconButton', checked);

  function change(e) {
    checked = e.detail.isOn;
  }
</script>

<button
  class={classes('mdc-icon-button', $$restProps)}
  on:change={change}
  aria-pressed={pressed}
  aria-label={label}
  use:mdc={{ on: checked }}>
  <span />

  {#if icon}
    <i class="material-icons mdc-icon-button__icon">{icon}</i>
  {:else if img}
    <img class="mdc-icon-button__icon" src={img} alt={label} />
  {/if}

  {#if iconToggle}
    <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">
      {iconToggle}
    </i>
  {:else if imgToggle}
    <img
      class="mdc-icon-button__icon mdc-icon-button__icon--on"
      src={imgToggle}
      alt={label} />
  {/if}
</button>
