<script>
  import mdc, { classes } from '../..';

  let className = '';
  export { className as class };

  export let open = false;
</script>

<div
  class="mdc-menu {classes('mdc-menu-surface', $$restProps)}
  {className}"
  use:mdc={{ open }}>
  <slot />
</div>
