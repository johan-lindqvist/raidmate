import styled from 'styled-components';

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;
