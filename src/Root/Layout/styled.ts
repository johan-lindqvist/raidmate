import styled from 'styled-components';

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.blue[50]};
`;

export const LayoutTop = styled.div`
  flex-shrink: 0;
`;

export const LayoutBottom = styled.div`
  flex: 1 1 auto;
  display: flex;
`;

export const LayoutBottomLeft = styled.div`
  flex-shrink: 0;
`;

export const LayoutBottomRight = styled.div`
  flex: 1 1 auto;
`;
