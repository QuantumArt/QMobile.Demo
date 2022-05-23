import { useObserver } from 'mobx-react-lite';
import React from 'react';
import devicesStore from '../../../stores/devices/devices-store';
import { IMarketingProduct } from '../../types';
import ImagesSlider from './images-slider';
import MainInfo from './main-info';
import DeviceDetailsTabs from './tabs/device-tabs';

type Props = {
  currentDeviceStore: IMarketingProduct;
};

export type InfoDataType = {
  mainTitle: string;
  price: number;
  shortFeatures: string[];
};

const parseDeviceStore = (store: IMarketingProduct): InfoDataType => {
  const infoData: InfoDataType = {
    mainTitle: store?.MarketingProduct?.Title,
    price: 0,
    shortFeatures: [],
  };

  store?.Parameters.forEach(parameter => {
    if (parameter.Title === 'Стоимость') {
      infoData.price = parameter.NumValue;
    }
    if (parameter.Group.Title === 'Краткие характеристики') {
      infoData.shortFeatures.push(parameter.Title);
    }
  });

  return infoData;
};

const DeviceDetailsPageContent = ({
  currentDeviceStore,
}: Props): JSX.Element => {
  const infoData = parseDeviceStore(currentDeviceStore);
  return useObserver(() => (
    <>
      <div className="device-details__main-container">
        <ImagesSlider imagesList={devicesStore.currentDevice?.Images} />
        <MainInfo data={infoData} />
      </div>
      <DeviceDetailsTabs />
    </>
  ));
};

export default DeviceDetailsPageContent;
