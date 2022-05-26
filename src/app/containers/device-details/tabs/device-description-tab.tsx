import { useObserver } from 'mobx-react-lite';
import React from 'react';
import parse from 'html-react-parser';

import devicesStore from '../../../../stores/devices/devices-store';

const DeviceDescriptionTab = (): JSX.Element => {
  return useObserver(() => (
    <div>
      <h3 className="device-details__description-tab-title">Описание</h3>
      <p>{parse(devicesStore.description ?? 'Нет описания')}</p>
    </div>
  ));
};

export default DeviceDescriptionTab;
