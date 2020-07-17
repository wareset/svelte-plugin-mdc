<script>
import Radio from '../Radio';
import Touch from '../Touch';
import FormField from '../FormField';

let group1 = 'radio1';
let group10 = '';
</script>

<div>
  <h3>Radio</h3>
  <Radio value="radio1" bind:group={group1} />
  <Radio value="radio2" bind:group={group1} />

  <h3>FormField Radio</h3>
  <FormField label="label">
    <Radio value="radio10" bind:group={group10} />
  </FormField>
  <FormField label="label">
    <Radio value="radio20" bind:group={group10} />
  </FormField>

  <h3>FormField Radio disabled</h3>
  <FormField label="label">
    <Radio disabled/>
  </FormField>

  <h3>Touch Radio</h3>
  <Touch>
    <Radio/>
  </Touch>

  <h3>Touch FormField Radio</h3>
  <Touch>
    <FormField label="label">
      <Radio/>
    </FormField>
  </Touch>
</div>
