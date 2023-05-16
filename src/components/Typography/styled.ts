import styled from 'styled-components';

import { TextProps } from './types';

export const Text = styled.span<TextProps>`
  font-size: ${(props) => props.theme.fontSize[props.$size]};
  font-weight: ${(props) => props.theme.fontWeight[props.$weight]};
  color: ${(props) => props.$wowColor && props.theme.colors.wow[props.$wowColor]};
`;
