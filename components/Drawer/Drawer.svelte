<script>
  import mdc, { classes } from '../..';

  export let title = 'title';
  export let subtitle = 'subtitle';
  // $$restProps: modal, dismissible, open
  $: open = !!($$props.open + 0);
</script>

<aside class={classes('mdc-drawer', $$restProps)} use:mdc={{ open }}>

  <div class="mdc-drawer__header">
    {#if title}
      <h3 class="mdc-drawer__title">{title}</h3>
    {/if}
    {#if subtitle}
      <h6 class="mdc-drawer__subtitle">{subtitle}</h6>
    {/if}
    <slot name="header" />
  </div>

  <div class="mdc-drawer__content">
    <nav class="mdc-list">
      <slot>

        <a
          class="mdc-list-item mdc-list-item--activated"
          href="#"
          aria-current="page">
          <span class="mdc-list-item__ripple" />
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">
            inbox
          </i>
          <span class="mdc-list-item__text">Inbox</span>
        </a>
        <a class="mdc-list-item" href="#">
          <span class="mdc-list-item__ripple" />
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">
            send
          </i>
          <span class="mdc-list-item__text">Outgoing</span>
        </a>
        <a class="mdc-list-item" href="#">
          <span class="mdc-list-item__ripple" />
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">
            drafts
          </i>
          <span class="mdc-list-item__text">Drafts</span>
        </a>

      </slot>
    </nav>
  </div>

  <div class="mdc-drawer-app-content">
    <slot name="content" />
  </div>

</aside>
