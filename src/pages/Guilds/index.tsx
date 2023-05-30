import { useState } from 'react';

import { Button } from 'components';

import { AddGuildModal } from './AddGuildModal';
import { Container } from './styled.ts';

export function GuildsPage() {
  const [showModal, setShowModal] = useState(true);

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);

  return (
    <Container>
      <Button primary onClick={handleShowModal}>
        Add guild
      </Button>
      <AddGuildModal show={showModal} onClose={handleHideModal} />
    </Container>
  );
}
