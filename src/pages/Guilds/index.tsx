import { ChangeEvent, useState } from 'react';

import { regions, realms } from 'app-constants';
import { Button, Modal, Select, TextField } from 'components';

import { Container } from './styled.ts';

export function GuildsPage() {
  const [showModal, setShowModal] = useState(true);
  const [selectedRegionId, setSelectedRegionId] = useState('');
  const [selectedServerId, setSelectedServerId] = useState('');
  const [guildName, setGuildName] = useState('');

  const handleShowModal = () => setShowModal(true);
  const handleHideModal = () => setShowModal(false);
  const handleSelectRegion = (regionId: string) => setSelectedRegionId(regionId);
  const handleSelectServer = (serverId: string) => setSelectedServerId(serverId);
  const handleChangeGuildName = (event: ChangeEvent<HTMLInputElement>) => setGuildName(event.target.value);

  const handleClearForm = () => {
    setSelectedRegionId('');
    setSelectedServerId('');
    setGuildName('');
  };

  const regionOptions = Object.values(regions).map((region) => ({
    value: region.id,
    label: region.label,
  }));

  const realmOptions = realms.map((realm) => ({
    value: realm.id,
    label: realm.label,
  }));

  return (
    <Container>
      <Button primary onClick={handleShowModal}>
        Add guild
      </Button>
      <Modal show={showModal} title="Add guild" onClose={handleHideModal}>
        <Button primary onClick={handleClearForm}>
          Clear
        </Button>
        <Select
          label="Region"
          placeholder="Select region"
          value={selectedRegionId}
          options={regionOptions}
          onChange={handleSelectRegion}
        />
        <Select
          label="Realm"
          placeholder="Select realm"
          value={selectedServerId}
          options={realmOptions}
          onChange={handleSelectServer}
        />
        <TextField label="Guild" placeholder="Enter guild name" value={guildName} onChange={handleChangeGuildName} />
      </Modal>
    </Container>
  );
}
