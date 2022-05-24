import React from 'react';
import { useNavigate } from 'react-router-dom';

import TariffCard from '../../components/tariff-card';
import DeviceCard from '../../components/device-card';
import TestImage from '../../../assets/images/Card_Demo.png';
import TestDeviceImage from '../../../assets/images/phonedemo.png';
import { ItemsInPackage } from '../../types';
import { ParametersList } from '../tariffs/tariff-cards-container';

type Props = {
  itemsList: ItemsInPackage;
};

const PackagesItemsContainer = ({ itemsList }: Props): JSX.Element => {
  const navigate = useNavigate();

  const tariffConnectHandler = (tariffId: number) => () => {
    navigate(`/tariffs/${tariffId}`);
  };
  return (
    <div className="package-details__package-items-container">
      {itemsList.map(item => {
        const parameters = item.Parameters.reduce<ParametersList>(
          (acc, parameterData) => {
            const parameterName = `${parameterData.Title} ${parameterData?.Unit?.Title}`;
            return {
              ...acc,
              [parameterName]: parameterData,
            };
          },
          {},
        );
        if (item.Type === 'Tariff') {
          return (
            <TariffCard
              key={item.Id}
              title={item.MarketingProduct.Title}
              image={item.MarketingProduct.ListImage}
              isHit={Math.random() > 0.5}
              mobileTraffic={
                parameters?.['Звонки на номера Qmobile минут в месяц']?.NumValue
              }
              internetTrafic={
                parameters?.['Пакет интернета гигабайт в месяц']?.NumValue
              }
              tariffPrice={
                parameters?.['Абонентская плата рублей в месяц']?.NumValue
              }
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
              image={TestDeviceImage}
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

export default PackagesItemsContainer;
