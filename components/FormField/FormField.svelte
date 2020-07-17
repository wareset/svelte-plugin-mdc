<script>
  import mdc from '../..';

  export let label = '';
</script>

<style>
  label {
    user-select: none;
  }
</style>

<div class="mdc-form-field" use:mdc>
  <slot />
  <label>{label}</label>
</div>
