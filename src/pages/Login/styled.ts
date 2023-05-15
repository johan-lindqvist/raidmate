import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    45deg,
    ${(props) => props.theme.colors.blue[50]},
    ${(props) => props.theme.colors.blue[200]}
  );
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.xl};
`;

export const BattlenetLink = styled.a`
  text-decoration: none;
  outline: none;

  color: ${(props) => props.theme.colors.text.light};
  font-size: ${(props) => props.theme.fontSize.paragraph};
  font-weight: ${(props) => props.theme.fontWeight.bold};

  padding: ${(props) => props.theme.spacing.lg};

  border-radius: ${(props) => props.theme.spacing.md};
  border: 2px solid ${(props) => props.theme.colors.battlenet.blue};
  background-color: ${(props) => props.theme.colors.battlenet.blue};

  transition: ${(props) => props.theme.transition('fast', 'background-color', 'border')};

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.battlenet.blueLight};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.battlenet.blueDark};
  }
`;
