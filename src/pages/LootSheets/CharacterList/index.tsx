import { Fragment } from 'react';

import { Header, Content } from './styled.ts';
import { Typography } from 'components';

export function CharacterList() {
  return (
    <Fragment>
      <Header>
        <Typography size="h2" weight="bold">
          Characters
        </Typography>
      </Header>
      <Content>List</Content>
    </Fragment>
  );
}
