import { Checkbox, Loader } from 'components';

import { GuildProps } from './types.ts';
import { GuildItem, GuildItemTexts, ResultContainer, ResultItem, StyledGuildName, StyledGuildRealm } from './styled.ts';

export function Guild(props: GuildProps) {
  const { state, guildChecked, onCheckGuild } = props;

  const open = state !== 'idle';

  return (
    <ResultContainer $open={open}>
      {state === 'loading' && (
        <ResultItem>
          <Loader />
        </ResultItem>
      )}
      {state === 'success' && (
        <ResultItem>
          <GuildItem>
            <GuildItemTexts>
              <StyledGuildName size="h3">Competence Optional</StyledGuildName>
              <StyledGuildRealm size="detail">Twisting Nether</StyledGuildRealm>
            </GuildItemTexts>
            <Checkbox checked={guildChecked} onChange={onCheckGuild} />
          </GuildItem>
        </ResultItem>
      )}
      {state === 'error' && <ResultItem>Error</ResultItem>}
    </ResultContainer>
  );
}
