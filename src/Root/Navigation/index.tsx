import { Clipboard, Grid, Settings, Table } from 'react-feather';

import { Sidebar, SidebarItem, SidebarList, SidebarLogo } from 'src/components';

export function Navigation() {
  return (
    <Sidebar>
      <SidebarLogo />
      <SidebarList>
        <SidebarItem to="/dashboard" icon={Grid} label="Dashboard" />
        <SidebarItem to="/summaries" icon={Table} label="Summaries" />
        <SidebarItem to="/loot-sheets" icon={Clipboard} label="Loot sheets" />
        <SidebarItem to="/settings" icon={Settings} label="Settings" />
      </SidebarList>
    </Sidebar>
  );
}
