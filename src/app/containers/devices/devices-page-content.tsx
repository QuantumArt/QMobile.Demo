import React from 'react';
import PhoneDemo from '../../../assets/images/phonedemo.png';
import DeviceCard from '../../components/device-card';

type Props = {};

const DevicesPageContent = (props: Props): JSX.Element => {
  return (
    <div className="devices-page-content">
      <h1 className="page-content-title page-content-title--devices">
        Устройства
      </h1>
      <div className="devices-page-content__cards-container">
        <DeviceCard
          image={PhoneDemo}
          title="Apple iPhone 13"
          price={80000}
          description="Смартфон Apple iPhone 13 128GB 
с новой комплектацией Black"
          rating={5}
          commentsCount={191}
        />
      </div>
    </div>
  );
};

export default DevicesPageContent;
