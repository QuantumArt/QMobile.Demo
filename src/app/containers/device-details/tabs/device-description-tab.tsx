import { useObserver } from 'mobx-react-lite';
import React from 'react';

import devicesStore from '../../../../stores/devices/devices-store';

const DeviceDescriptionTab = (): JSX.Element => {
  return useObserver(() => (
    <div>
      <h3 className="device-details__description-tab-title">Описание</h3>
      <p dangerouslySetInnerHTML={{ __html: devicesStore.description ?? '' }} />
    </div>
  ));
};

export default DeviceDescriptionTab;
