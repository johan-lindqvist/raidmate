import { ChangeEvent, useState } from 'react';

import { realms, regions } from 'app-constants';
import { Button, FeatherIcon, Modal, Select, TextField, ModalBody, ModalFooter, ModalHeader } from 'components';
import { useMock } from 'domains/mock/hooks';

import { Guild } from './Guild';
import { Row, Item } from './styled.ts';
import { AddGuildModalProps } from './types.ts';

export function AddGuildModal(props: AddGuildModalProps) {
  const { show, onClose } = props;
  const { onboard } = useMock();

  const [selectedRegionId, setSelectedRegionId] = useState('');
  const [selectedServerId, setSelectedServerId] = useState('');
  const [guildName, setGuildName] = useState('');
  const [guildState, setGuildState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isGuildChecked, setIsGuildChecked] = useState(false);

  const validForm = Boolean(selectedRegionId && selectedServerId && guildName);

  const handleSelectRegion = (regionId: string) => setSelectedRegionId(regionId);
  const handleSelectServer = (serverId: string) => setSelectedServerId(serverId);
  const handleChangeGuildName = (event: ChangeEvent<HTMLInputElement>) => setGuildName(event.target.value);

  const handleAddGuild = () => {
    switch (guildState) {
      case 'idle': {
        setGuildState('loading');
        break;
      }
      case 'loading': {
        setGuildState('error');
        break;
      }
      case 'error': {
        setGuildState('success');
        break;
      }
      case 'success': {
        setGuildState('idle');
        break;
      }
    }
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
    <Modal show={show} onClose={onClose}>
      <ModalHeader title="Add guild" onClose={onClose} />
      <ModalBody>
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
            <TextField
              label="Guild"
              placeholder="Enter guild name"
              value={guildName}
              onChange={handleChangeGuildName}
            />
          </Item>
          <Item $flex={0}>
            <Button disabled={!validForm} onClick={handleAddGuild}>
              <FeatherIcon icon="Plus" />
              Add guild
            </Button>
          </Item>
        </Row>
        <Row>
          <Item $flex={1}>
            <Guild state={guildState} guildChecked={isGuildChecked} onCheckGuild={setIsGuildChecked} />
          </Item>
        </Row>
      </ModalBody>
      <ModalFooter
        cancelButton={
          <Button disabled={guildState === 'loading'} onClick={onClose}>
            Cancel
          </Button>
        }
        submitButton={
          <Button primary disabled={!isGuildChecked} onClick={onboard}>
            Add guild
          </Button>
        }
      />
    </Modal>
  );
}
