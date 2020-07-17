<script>
  export let label = 'label';

  $: outlined = !!($$props.outlined + 0);
  $: noLabel = !!($$props['no-label'] + 0);
  $: above = !!($$props.above + 0);
</script>

{#if outlined}
  <span class="mdc-notched-outline">
    <span class="mdc-notched-outline__leading" />
    <span class="mdc-notched-outline__notch">
      {#if !noLabel}
        <span
          class="mdc-floating-label"
          class:mdc-floating-label--float-above={above}>
          {label}
        </span>
      {/if}
    </span>
    <span class="mdc-notched-outline__trailing" />
  </span>
{:else}
  {#if !noLabel}
    <span
      class="mdc-floating-label"
      class:mdc-floating-label--float-above={above}>
      {label}
    </span>
  {/if}
  <span class="mdc-line-ripple" />
{/if}
