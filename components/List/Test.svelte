<script>
import List, { ListItem, ListDivider, ListGroup } from '../List';

let is = true;
setTimeout(() => {
  is = !is;
}, 2500);
</script>


<div>
  <h3>ListGroup</h3>
  <ListGroup>
    <h3 class="mdc-list-group__subheader">Single-line list</h3>
    <List avatar-list>
      <ListItem icon="folder"/>
      <ListItem selected reverse iconTrailing="info"/>
      <ListDivider />
      <ListItem  secondary="secondary"/>
    </List>
    <ListDivider />
    <List two-line>
      <ListItem icon="folder" reverse iconTrailing="star" />
      <ListItem selected/>
      <ListDivider />
      <ListItem secondary="secondary" />
    </List>
    <h3 class="mdc-list-group__subheader">List Radio</h3>
    <List two-line  avatar-list role="radiogroup">
      <ListItem icon="star" />
      <ListItem selected />
      <ListDivider />
      <ListItem  secondary="secondary"/>
    </List>
    <h3 class="mdc-list-group__subheader">List Checkbox</h3>
    <List role="group">
      <ListItem icon="star" />
      <ListItem selected/>
      <ListDivider />
      <ListItem reverse secondary="secondary"/>
    </List>
  </ListGroup>
</div>
