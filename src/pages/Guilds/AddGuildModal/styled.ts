import styled from 'styled-components';

import { ItemProps } from './types.ts';

export const Row = styled.div`
  display: flex;
  gap: inherit;
`;

export const Item = styled.div<ItemProps>`
  align-self: flex-end;
  flex: ${(props) => props.$flex};
`;
