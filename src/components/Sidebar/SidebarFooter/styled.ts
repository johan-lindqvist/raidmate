import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.lg};
  margin-top: auto;
`;
