import { BigButton, Sidebar, SidebarFooter, SidebarItem, SidebarList, SidebarLogo } from 'components';

export function Navigation() {
  return (
    <Sidebar>
      <SidebarLogo />
      <SidebarList>
        <SidebarItem to="/dashboard" icon="Grid" label="Dashboard" />
        <SidebarItem to="/summaries" icon="Table" label="Summaries" />
        <SidebarItem to="/loot-sheets" icon="Clipboard" label="Loot sheets" />
        <SidebarItem to="/settings" icon="Settings" label="Settings" />
      </SidebarList>
      <SidebarFooter>
        <BigButton primary="Competence Optional" secondary="Twisting Nether (EU)" icon="Home" wowColor="alliance" />
        <BigButton primary="CalvinG" secondary="#1337" icon="LogOut" />
      </SidebarFooter>
    </Sidebar>
  );
}
