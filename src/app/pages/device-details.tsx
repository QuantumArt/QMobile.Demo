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
    <CurrentPathInfo
      pathNames={[`/${devicesStore.currentDevice?.MarketingProduct?.Title}`]}
    />
  ));
};

export default DeviceDetails;
