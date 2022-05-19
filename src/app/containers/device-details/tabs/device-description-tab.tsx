import { useObserver } from 'mobx-react-lite';
import React from 'react';
import devicesStore from '../../../../stores/devices/devices-store';

const DeviceDescriptionTab = (): JSX.Element => {
  return useObserver(() => (
    <div>
      <h3>Описание</h3>
      <p>{devicesStore.description}</p>
    </div>
  ));
};

export default DeviceDescriptionTab;
