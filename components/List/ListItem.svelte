<script>
  import { getContext } from 'svelte/internal';
  import { writable } from 'svelte/store';

  import mdc, { classes, uid } from '../..';

  import Radio from '../Radio';
  import Checkbox from '../Checkbox';

  const List = getContext('List');
  const name = List.name || 'mdc-list-item-' + uid();
  const role = { listbox: 'option', radiogroup: 'radio', group: 'checkbox' }[
    List.role
  ];

  export let label = 'List item';
  export let secondary = '';
  export let icon, iconTrailing;
  export let value = label + uid();

  export let group = null; // role === 'radio' ? value : [];
  const group$ = List.group$ || writable(group);
  $: group = $group$;

  // $$restProps: reverse
  $: selected = !!($$props.selected + 0);
</script>

<style>
  :global(.mdc-list-item) {
    padding: 0 0.5em;
  }

  :global(.mdc-list-item--reverse) {
    flex-flow: row-reverse;
  }

  :global(.mdc-list-item > .mdc-list-item__text) {
    display: flex;
    flex: auto;
    flex-flow: column wrap;
    align-self: center;
    margin: -1em 0.75em;
    overflow: visible;
  }

  :global(.mdc-list-item
      > .mdc-list-item__text
      > .mdc-list-item__primary-text) {
    margin-top: -1.25em;
    overflow: visible;
  }
  :global(.mdc-list-item
      > .mdc-list-item__text
      > .mdc-list-item__secondary-text) {
    margin-top: -0.125em;
    margin-bottom: -0.125em;
    overflow: visible;
  }

  :global(.mdc-list-item > .mdc-list-item__graphic-controls) {
    margin: 0;
  }

  :global(.mdc-list-item > .mdc-list-item__graphic) {
    margin: 0 0.5em;
  }

  :global(.mdc-list-item > .mdc-list-item__meta) {
    margin: 0 0.5em;
  }
</style>

<li
  class={classes('mdc-list-item', $$restProps)}
  {role}
  class:mdc-list-item--selected={role === 'option' && selected}
  aria-checked={selected}
  data-value={value}>

  {#if role === 'radio' || role === 'checkbox'}
    <span class="mdc-list-item__graphic-controls">
      {#if role === 'radio'}
        <Radio {name} {value} bind:group={$group$} checked={selected} />
      {:else}
        <Checkbox {name} {value} bind:group={$group$} checked={selected} />
      {/if}
    </span>
  {/if}

  {#if icon}
    <i class="mdc-list-item__graphic material-icons" aria-hidden="true">
      {icon}
    </i>
  {/if}

  <label class="mdc-list-item__text">
    <div class="mdc-list-item__primary-text">{label}</div>
    {#if secondary}
      <div class="mdc-list-item__secondary-text">{secondary}</div>
    {/if}
  </label>

  {#if iconTrailing}
    <i class="mdc-list-item__meta material-icons" aria-hidden="true">
      {iconTrailing}
    </i>
  {/if}
</li>
