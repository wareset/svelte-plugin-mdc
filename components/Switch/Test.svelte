<script>
import Switch from '../Switch';
import Touch from '../Touch';
import FormField from '../FormField';
</script>

<div>
  <h3>Switch</h3>
  <Switch name="radio1"/>
  <Switch name="radio1"/>

  <h3>FormField Switch</h3>
  <FormField label="label">
    <Switch name="radio2"/>
  </FormField>
  <FormField label="label">
    <Switch name="radio2"/>
  </FormField>

  <h3>FormField Switch disabled</h3>
  <FormField label="label">
    <Switch disabled/>
  </FormField>

  <h3>Touch Switch</h3>
  <Touch>
    <Switch/>
  </Touch>

  <h3>Touch FormField Switch</h3>
  <Touch>
    <FormField label="label">
      <Switch/>
    </FormField>
  </Touch>
</div>
