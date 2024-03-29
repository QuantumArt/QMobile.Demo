import React from 'react';
import { useNavigate } from 'react-router-dom';

import TariffCard from '../../components/tariff-card';
import DeviceCard from '../../components/device-card';
import TestImage from '../../../assets/images/Card_Demo.png';
import TestDeviceImage from '../../../assets/images/phonedemo.png';
import { ItemsInPackage } from '../../types';
import { getParametersByNames } from '../tariffs/tariff-cards-container';

type Props = {
  itemsList: ItemsInPackage;
};

const PackageItemsContainer = ({ itemsList }: Props): JSX.Element => {
  const navigate = useNavigate();

  const tariffConnectHandler = (tariffId: number) => () => {
    navigate(`/tariffs/${tariffId}`);
  };
  return (
    <div className="package-details__package-items-container">
      {itemsList.map(item => {
        if (item.Type === 'Tariff') {
          const parameters = getParametersByNames(item);
          return (
            <TariffCard
              key={item.Id}
              title={item.MarketingProduct.Title}
              image={item.MarketingProduct.ListImage}
              isHit={Math.random() > 0.5}
              mobileTraffic={parameters?.['8488']?.NumValue}
              internetTrafic={parameters?.['8487']?.NumValue}
              tariffPrice={parameters?.['8476']?.NumValue}
              onConnectHandler={tariffConnectHandler(item.Id)}
            />
          );
        }
        if (item.Type === 'Device') {
          const priceParameter = item.Parameters.find(
            parameter => parameter.Title === 'Стоимость',
          );
          return (
            <DeviceCard
              key={item.Id}
              image={
                item.Images?.find(image => image.Type.Alias === 'list')
                  ?.Image ?? ''
              }
              title={item.MarketingProduct.Title}
              description={item.MarketingProduct.Description}
              price={priceParameter?.NumValue}
              rating={5}
              commentsCount={191}
              aboutLink={`/devices/${item.Id}`}
              onConnectHandler={() => {
                console.log('Заглушка');
              }}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default PackageItemsContainer;
