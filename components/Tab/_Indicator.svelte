<script>
  // import mdc from '../_svelte-adapter';

  export let active;
  export let underline = true;
</script>

<span class="mdc-tab-indicator" class:mdc-tab-indicator--active={active}>
  <span
    class="mdc-tab-indicator__content"
    class:mdc-tab-indicator__content--underline={underline} />
</span>
