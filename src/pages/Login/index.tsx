import { useConfig } from 'domains/config';

import { Background, BattlenetLink, Container } from './styled';
import { Button } from 'src/components';

export function LoginPage() {
  const { blizzard } = useConfig();

  const blizzardUrl = new URL(blizzard.oauthUrl);

  blizzardUrl.searchParams.append('state', blizzard.state);
  blizzardUrl.searchParams.append('scope', blizzard.scope);
  blizzardUrl.searchParams.append('client_id', blizzard.clientId);
  blizzardUrl.searchParams.append('redirect_uri', blizzard.redirectUri);
  blizzardUrl.searchParams.append('response_type', blizzard.responseType);

  return (
    <Background>
      <Container>
        <Button primary>Primary button</Button>
        <Button>Secondary button</Button>
        <BattlenetLink href={blizzardUrl.toString()}>Log in with Battle.Net</BattlenetLink>
      </Container>
    </Background>
  );
}
