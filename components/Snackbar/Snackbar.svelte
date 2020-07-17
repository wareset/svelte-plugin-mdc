<script>
  import mdc, { classes } from '../..';

  export let label = "Can't send photo. Retry in 5 seconds.";
  export let close = true;
  // $$restProps: stacked, leading, open, closing
  $: open = !!($$props.open + 0);
</script>

<div class={classes('mdc-snackbar', $$restProps)} use:mdc={{ open }}>
  <div class="mdc-snackbar__surface">

    <div class="mdc-snackbar__label" role="status" aria-live="polite">
      {label}
    </div>

    <div class="mdc-snackbar__actions">
      <slot>
        <button type="button" class="mdc-button mdc-snackbar__action">
          <div class="mdc-button__ripple" />
          <span class="mdc-button__label">Retry</span>
        </button>
      </slot>

      {#if close}
        <button
          class="mdc-icon-button mdc-snackbar__dismiss material-icons"
          title="Dismiss">
          close
        </button>
      {/if}
    </div>

  </div>
</div>
