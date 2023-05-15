import { Grid } from 'react-feather';

import { Sidebar, SidebarItem } from 'src/components';

export function Navigation() {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <Sidebar>
      <SidebarItem icon={Grid} label="Dashboard" onClick={handleClick} />
    </Sidebar>
  );
}
