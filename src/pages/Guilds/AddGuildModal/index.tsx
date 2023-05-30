import { ChangeEvent, useState } from 'react';

import { realms, regions } from 'app-constants';
import { Button, FeatherIcon, Modal, Select, TextField } from 'components';

import { AddGuildModalProps } from './types.ts';
import { Row, Item } from './styled.ts';

export function AddGuildModal(props: AddGuildModalProps) {
  const { show, onClose } = props;

  const [selectedRegionId, setSelectedRegionId] = useState('');
  const [selectedServerId, setSelectedServerId] = useState('');
  const [guildName, setGuildName] = useState('');

  const validForm = Boolean(selectedRegionId && selectedServerId && guildName);

  const handleSelectRegion = (regionId: string) => setSelectedRegionId(regionId);
  const handleSelectServer = (serverId: string) => setSelectedServerId(serverId);
  const handleChangeGuildName = (event: ChangeEvent<HTMLInputElement>) => setGuildName(event.target.value);

  const handleAddGuild = () => {};

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
    <Modal show={show} title="Add guild" onClose={onClose}>
      <Button onClick={handleClearForm}>Clear</Button>
      <Row>
        <Item $flex={1}>
          <Select
            label="Region"
            placeholder="Select region"
            value={selectedRegionId}
            options={regionOptions}
            onChange={handleSelectRegion}
          />
        </Item>
        <Item $flex={1}>
          <Select
            label="Realm"
            placeholder="Select realm"
            value={selectedServerId}
            options={realmOptions}
            onChange={handleSelectServer}
          />
        </Item>
      </Row>
      <Row>
        <Item $flex={1}>
          <TextField label="Guild" placeholder="Enter guild name" value={guildName} onChange={handleChangeGuildName} />
        </Item>
        <Item $flex={0}>
          <Button primary disabled={!validForm} onClick={handleAddGuild}>
            <FeatherIcon icon="Plus" />
            Add guild
          </Button>
        </Item>
      </Row>
    </Modal>
  );
}
