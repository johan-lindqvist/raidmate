import { useState } from 'react';

import { routes } from 'app-constants';
import { IconButton } from 'components';

import { SidebarItem } from './SidebarItem';
import { ItemsContainer, SidebarContainer, SidebarFooter } from './styled';

export function Sidebar() {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen((value) => !value);
  const toggleIcon = open ? 'ChevronLeft' : 'ChevronRight';

  return (
    <SidebarContainer $open={open}>
      <ItemsContainer>
        <SidebarItem open={open} to={routes.dashboard} icon="Grid" label="Dashboard" />
        <SidebarItem open={open} to={routes.summaries} icon="Zap" label="Summaries" />
        <SidebarItem open={open} to={routes.lootsheets} icon="Clipboard" label="Loot Sheets" />
        <SidebarItem open={open} to={routes.settings} icon="Settings" label="Settings" />
      </ItemsContainer>
      <SidebarFooter>
        <IconButton icon={toggleIcon} onClick={toggleSidebar} />
      </SidebarFooter>
    </SidebarContainer>
  );
}
