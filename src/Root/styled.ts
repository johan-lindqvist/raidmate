import styled from 'styled-components';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${(props) => props.theme.colors.blue[50]};
`;

export const LayoutLeft = styled.div`
  flex-shrink: 0;
`;

export const LayoutRight = styled.div`
  flex: 1 1 auto;
`;
