import { useObserver } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import PhoneDemo from '../../../assets/images/phonedemo.png';
import devicesStore from '../../../stores/devices/devices-store';
import DeviceCard from '../../components/device-card';

const DevicesPageContent = (): JSX.Element => {
  useEffect(() => {
    devicesStore.init();
  }, []);

  return useObserver(() => (
    <div className="devices-page-content">
      <h1 className="page-content-title page-content-title--devices">
        Устройства
      </h1>
      <div className="devices-page-content__cards-container">
        {devicesStore.devicesList.map(device => {
          const priceParameter = device.Parameters.find(
            parameter => parameter.Title === 'Стоимость',
          );

          return (
            <DeviceCard
              key={device.Id}
              image={
                device.Images?.find(image => image.Type.Alias === 'list')
                  ?.Image ?? ''
              }
              title={device.MarketingProduct.Title}
              price={priceParameter?.NumValue}
              description={device.MarketingProduct.Description}
              rating={5}
              commentsCount={191}
              aboutLink={`/devices/${device.Id}`}
              onConnectHandler={() => {
                console.log('Заглушка');
              }}
            />
          );
        })}
      </div>
    </div>
  ));
};

export default DevicesPageContent;
