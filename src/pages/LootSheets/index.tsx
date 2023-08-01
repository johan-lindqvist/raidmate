import { useMockData } from 'domains/mock';

import { CharacterList } from './CharacterList';
import { CharacterSheet } from './CharacterSheet';
import { Container, LeftColumn, RightColumn } from './styled.ts';

export function LootSheetsPage() {
  const { data, loading } = useMockData('');

  console.log({ data });
  console.log({ loading });

  return (
    <Container>
      <LeftColumn $animationOrder={1}>
        <CharacterList />
      </LeftColumn>
      <RightColumn $animationOrder={2}>
        <CharacterSheet />
      </RightColumn>
    </Container>
  );
}
