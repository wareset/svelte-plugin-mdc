
<script>
import Select from '../Select';
import { ListItem } from '../List';
</script>

<div>
  <h3>Select</h3>
  <Select>
    <ListItem icon="folder"/>
    <ListItem icon="star" />
    <ListItem selected reverse iconTrailing="info"/>
    <ListItem secondary="secondary"/>
  </Select>

  <h3>Select outlined</h3>
  <Select outlined icon="star">
    <ListItem icon="folder"/>
    <ListItem secondary="secondary"/>
    <ListItem icon="star" disabled/>
    <ListItem selected reverse iconTrailing="info"/>
  </Select>

  <h3>Select required</h3>
  <Select required>
    <ListItem secondary="secondary"/>
    <ListItem icon="folder"/>
    <ListItem selected reverse iconTrailing="info"/>
    <ListItem icon="star" />
  </Select>
</div>
