import { useState } from 'react';

import { regions } from 'app-constants';
import { Button, Modal, Select } from 'components';

import { Container } from './styled.ts';

export function GuildsPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedRegionId, setSelectedRegionId] = useState('');

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);
  const handleSelectChange = (value: string) => setSelectedRegionId(value);

  const options = Object.values(regions).map((region) => ({
    value: region.id,
    label: region.label,
  }));

  return (
    <Container>
      <Button primary onClick={handleShowModal}>
        Add guild
      </Button>
      <Modal show={showModal} title="Add guild" onClose={handleHideModal}>
        <Select label="Select region" value={selectedRegionId} options={options} onChange={handleSelectChange} />
        <Select
          disabled
          label="Select region"
          value={selectedRegionId}
          options={options}
          onChange={handleSelectChange}
        />
      </Modal>
    </Container>
  );
}
