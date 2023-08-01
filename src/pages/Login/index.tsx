import { Auth } from 'aws-amplify';

import { Button } from 'components';

import { Background, Container } from './styled';

export function LoginPage() {
  const handleLogin = () => {
    Auth.federatedSignIn({ customProvider: 'Blizzard' });
  };

  return (
    <Background>
      <Container>
        <Button appearance="battlenet" onClick={handleLogin}>
          Log in with Battle.Net
        </Button>
      </Container>
    </Background>
  );
}
