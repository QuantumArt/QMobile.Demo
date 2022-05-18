import React from 'react';
import Images from './images';
import MainInfo from './main-info';

const DeviceDetailsPageContent = (): JSX.Element => {
  return (
    <div className="device-details__main-container">
      <Images />
      <MainInfo />
    </div>
  );
};

export default DeviceDetailsPageContent;
