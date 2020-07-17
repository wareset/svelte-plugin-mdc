<script>
  import { setContext } from 'svelte/internal';
  import { writable } from 'svelte/store';

  import mdc, { classes, uid } from '../..';

  let className = '';
  export { className as class };

  export let name = 'mdc-list-' + uid();
  export let role = 'listbox'; // radiogroup, group
  export let group = null;
  const group$ = writable(group);
  $: group = $group$;

  $: console.log('List', $group$);

  // $$restProps: two-line, avatar-list
  setContext('List', { name, role, group$ });
</script>

<ul class="{classes('mdc-list', $$restProps)} {className}" {role} use:mdc>
  <slot />
</ul>
