<script>
  import mdc, { classes } from '../..';
</script>

<div class={classes('mdc-tab-bar', $$restProps)} role="tablist" use:mdc>
  <div class="mdc-tab-scroller" use:mdc>
    <div class="mdc-tab-scroller__scroll-area">
      <div class="mdc-tab-scroller__scroll-content">
        <slot />
      </div>
    </div>
  </div>
</div>
