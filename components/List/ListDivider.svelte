<script>
  import { getContext } from 'svelte/internal';
  const isList = !!getContext('List');
</script>

{#if isList}
  <li role="separator" class="mdc-list-divider" />
{:else}
  <hr class="mdc-list-divider" />
{/if}
