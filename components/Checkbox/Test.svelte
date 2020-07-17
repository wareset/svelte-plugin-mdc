<script>
import Checkbox from '../Checkbox';
import Touch from '../Touch';
import FormField from '../FormField';

let value = true;
// $: console.log(value);
// setInterval(() => {
//   if (value === false) value = null;
//   else value = !value;
// }, 2000);
</script>

<!--
<div>
  <h3>Checkbox</h3>
  <Checkbox/>

  <h3>FormField Checkbox</h3>
  <FormField label="label">
    <Checkbox />
  </FormField>

  <h3>Touch Checkbox </h3>
  <Touch>
    <Checkbox bind:checked={value} />
  </Touch>

  <h3>Touch FormField Checkbox disabled</h3>
  <Touch>
    <FormField label="label">
      <Checkbox disabled/>
    </FormField>
  </Touch>
</div>
-->

<FormField label="label">
  <Checkbox />
</FormField>
