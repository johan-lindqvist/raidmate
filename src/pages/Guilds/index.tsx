import { useState } from 'react';

import { Button, Modal, Select } from 'components';

import { Container } from './styled.ts';

export function GuildsPage() {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState('1');

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);
  const handleSelectChange = (value: string) => setValue(value);

  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
  ];

  return (
    <Container>
      <Button primary onClick={handleShowModal}>
        Add guild
      </Button>
      <Modal show={showModal} title="Add guild" onClose={handleHideModal}>
        <Select value={value} options={options} onChange={handleSelectChange} />
      </Modal>
    </Container>
  );
}
