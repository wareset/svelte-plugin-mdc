<script>
  import { onMount, toggle_class, element, append } from 'svelte/internal';
  import mdc, { classes, filter_mdc_classes } from '../..';

  let target;
  onMount(() => {
    const child = target.children[0];
    if (!child) return;

    const className = filter_mdc_classes(child)[0];
    if (!className) return;
    toggle_class(child, className + '--touch', true);

    const touch = element('div');
    toggle_class(touch, className + '__touch', true);

    append(child, touch);
  });
</script>

<div class="mdc-touch-target-wrapper" bind:this={target}>
  <slot />
</div>
