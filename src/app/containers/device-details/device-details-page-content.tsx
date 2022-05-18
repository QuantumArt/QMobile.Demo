import React from 'react';
import { IMarketingProduct } from '../../types';
import Images from './images';
import MainInfo from './main-info';

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
  });

  return infoData;
};

const DeviceDetailsPageContent = ({
  currentDeviceStore,
}: Props): JSX.Element => {
  const infoData = parseDeviceStore(currentDeviceStore);
  return (
    <div className="device-details__main-container">
      <Images />
      <MainInfo data={infoData} />
    </div>
  );
};

export default DeviceDetailsPageContent;
