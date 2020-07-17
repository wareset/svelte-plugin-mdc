<script>
import Menu from '../Menu';
import List from '../List';

let open = true;

// setInterval(() => {
//   open = !open;
// }, 2500);
</script>

<div>
  <h3 class='mdc-typography--subtitle1'>Menu</h3>
  <Menu {open}>
    <List>
      <li>
      <ul class="mdc-menu__selection-group">
        <li class="mdc-list-item" role="menuitem">
          <span class="mdc-list-item__graphic mdc-menu__selection-group-icon">
            ...
          </span>
          <span class="mdc-list-item__text">Single</span>
        </li>
        <li class="mdc-list-item" role="menuitem">
          <span class="mdc-list-item__graphic mdc-menu__selection-group-icon">
           ...
          </span>
          <span class="mdc-list-item__text">1.15</span>
        </li>
      </ul>
    </li>
    <li class="mdc-list-divider" role="separator"></li>
    <li class="mdc-list-item" role="menuitem">
      <span class="mdc-list-item__text">Add space before paragraph</span>
    </li>
    </List>
  </Menu>
</div>
