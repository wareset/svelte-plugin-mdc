<script>
  import mdc, { classes, uid } from '../..';

  const labelId = uid();
  const contentId = uid();

  export let title = 'title';
  // $$restProps:  scrollable, stacked, open, opening, closing
  $: open = !!($$props.open + 0);
</script>

<div class={classes('mdc-dialog', $$restProps)} use:mdc={{ open }}>
  <div class="mdc-dialog__container">

    <div
      class="mdc-dialog__surface"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby={labelId}
      aria-describedby={contentId}>

      <div class="mdc-dialog__title" id={labelId}>
        {#if title}{title}{/if}
        <slot name="title">Choose a Ringtone</slot>
      </div>

      <div class="mdc-dialog__content" id={contentId}>
        <slot name="content">Discard draft?</slot>
      </div>

      <div class="mdc-dialog__actions">
        <slot name="actions">
          <button
            type="button"
            class="mdc-button mdc-dialog__button"
            data-mdc-dialog-action="cancel">
            <div class="mdc-button__ripple" />
            <span class="mdc-button__label">Cancel</span>
          </button>
          <button
            type="button"
            class="mdc-button mdc-dialog__button"
            data-mdc-dialog-action="discard">
            <div class="mdc-button__ripple" />
            <span class="mdc-button__label">Discard</span>
          </button>
        </slot>
      </div>

    </div>

  </div>
  <div class="mdc-dialog__scrim" />
</div>
