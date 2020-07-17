<script>
  import mdc, { classes } from '../..';
  // $$restProps: fixed, fixed-adjust, prominent, prominent-fixed-adjust, dense, dense-fixed-adjust, dense-prominent-fixed-adjust, short, short-collapsed, short-fixed-adjust
</script>

<style>

</style>

<header class={classes('mdc-top-app-bar', $$restProps)} use:mdc>
  <div class="mdc-top-app-bar__row">

    <section
      class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      <slot>
        <button
          class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">
          menu
        </button>
        <span class="mdc-top-app-bar__title">Title</span>
      </slot>
    </section>

    <section
      class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
      role="toolbar">
      <slot name="end">
        <button
          class="material-icons mdc-top-app-bar__action-item mdc-icon-button"
          aria-label="Bookmark this page">
          bookmark
        </button>
      </slot>
    </section>

  </div>
</header>
