import { RaidmateIconBorder } from 'theme';

import { BorderContainer, LoaderContainer, Spinner, SpinnerContainer } from './styled.ts';

export function Loader() {
  return (
    <LoaderContainer>
      <BorderContainer>
        <RaidmateIconBorder />
      </BorderContainer>
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    </LoaderContainer>
  );
}
