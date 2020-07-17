<script>
  import mdc, { classes } from '../..';
  import FloatingLabel from '../TextField/_FloatingLabel.svelte';

  export let value = '';

  export let label = 'label';
  export let type = 'text';
  export let icon, iconTrailing;
  export let rows, cols;
  // export let prefix = '$', suffix = '.00';
  export let placeholder = 'placeholder';
  export let helper = 'helper';
  export let maxlength = 100;

  // $$restProps: filled, outlined, full-width, textarea

  $: textarea = !!($$props.textarea + 0);
  $: outlined = !!($$props.outlined + 0);
  $: required = !!($$props.required + 0);
  $: disabled = !!($$props.disabled + 0);

  $: console.log('TextField', value);
  // let target;
  // $: if (target && target.value !== value) target.value = value;
  function change(e) {
    value = e.target.value;
  }
  function input(e) {
    value = e.target.value;
  }
</script>

<style>
  :global(.mdc-text-field--full-width) {
    width: 100%;
  }

  :global(input ~ .mdc-text-field-character-counter) {
    position: absolute;
    right: 3px;
    bottom: 1px;
  }

  :global(.mdc-text-field-helper-line) {
    margin-top: -8px;
    padding-bottom: 4px;
  }

  /* :global(.mdc-text-field__affix) {
  align-self: center;
  padding: 0.875em 8px 0;
  margin-top: -8px;
  padding-bottom: 4px;
} */
</style>

<label
  class={classes('mdc-text-field', $$restProps)}
  on:change
  on:input
  class:mdc-text-field--with-leading-icon={icon}
  class:mdc-text-field--with-trailing-icon={iconTrailing}
  use:mdc={{ value }}>
  <span class="mdc-text-field__ripple" />

  {#if icon}
    <i
      class="material-icons mdc-text-field__icon mdc-text-field__icon--leading">
      {icon}
    </i>
  {/if}

  {#if textarea}
    <textarea
      class="mdc-text-field__input"
      on:change={change}
      on:input={input}
      rows={+rows}
      cols={+cols}
      aria-label={label}
      {placeholder}
      {required}
      {disabled}
      {maxlength} />
  {:else}
    <!-- <span class="mdc-text-field__affix mdc-text-field__affix--prefix">{prefix}</span> -->
    <input
      class="mdc-text-field__input"
      {type}
      on:change={change}
      on:input={input}
      aria-label={label}
      {placeholder}
      {required}
      {disabled}
      {maxlength} />
    <!-- <span class="mdc-text-field__affix mdc-text-field__affix--suffix">{suffix}</span> -->
  {/if}

  {#if iconTrailing}
    <i
      class="material-icons mdc-text-field__icon mdc-text-field__icon--trailing">
      {iconTrailing}
    </i>
  {/if}

  {#if maxlength}
    <div class="mdc-text-field-character-counter">0 / 140</div>
  {/if}

  <FloatingLabel {...$$props} />
</label>

<div class="mdc-text-field-helper-line">
  {#if helper}
    <div class="mdc-text-field-helper-text" aria-hidden="true">{helper}</div>
  {/if}
</div>
