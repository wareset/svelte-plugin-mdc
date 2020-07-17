<script>
import TabBar from '../TabBar';
import Tab from '../Tab';

</script>

<div>
  <h3 class='mdc-typography--subtitle1'>Tabs with icons next to labels</h3>
  <TabBar>
    <Tab label='Recents' icon='access_time' />
    <Tab active label='Nearby' icon='near_me' />
    <Tab label='Favorites' icon='favorite' />
  </TabBar>

  <h3 class='mdc-typography--subtitle1'>Tabs with icons above labels and indicators restricted to content</h3>
  <TabBar>
    <Tab label='Recents' icon='access_time' stacked contentWidthIndicator />
    <Tab active label='Nearby' icon='near_me' stacked contentWidthIndicator />
    <Tab active label='Favorites' icon='favorite' stacked contentWidthIndicator />
  </TabBar>

  <h3 class='mdc-typography--subtitle1'>Scrolling tabs</h3>
  <TabBar center>
    <Tab label='Tab One' />
    <Tab label='Tab Two' />
    <Tab label='Tab Three' />
    <Tab label='Tab Four' />
    <Tab label='Tab Five' />
    <Tab label='Tab Six' />
    <Tab label='Tab Seven' />
    <Tab label='Tab Eight' />
    <Tab label='Tab Nine' />
    <Tab label='Tab Ten' />
    <Tab label='Tab Eleven' />
    <Tab label='Tab Twelve' />
  </TabBar>
</div>