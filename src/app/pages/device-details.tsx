import { useObserver } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import devicesStore from '../../stores/devices/devices-store';
import CurrentPathInfo from '../components/current-path-info';

const DeviceDetails = (): JSX.Element => {
  const location = useLocation();

  useEffect(() => {
    const deviceId = location.pathname.split('/').slice(-1);
    devicesStore.fetchDevice(deviceId[0]);
  }, [location.pathname]);

  return useObserver(() => (
    <div className="device-details__page-container">
      <CurrentPathInfo
        elementName={`${
          devicesStore.currentDevice?.MarketingProduct?.Title ?? ''
        }`}
      />
    </div>
  ));
};

export default DeviceDetails;
