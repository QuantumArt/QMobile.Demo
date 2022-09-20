import React from 'react';
import { DevicesStore } from '../../../stores/devices/devices-store';
import { PackagesStore } from '../../../stores/packages/packages-store';
import { ItemsInPackage } from '../../types';
import DeviceFeaturesTab from '../device-details/tabs/device-features-tab';
import ParametersList from '../parameters-list/parameters-list';

type Props = {
  itemsList: ItemsInPackage;
};

const PackageItemsDetails = ({ itemsList }: Props): JSX.Element => {
  return (
    <>
      {itemsList.map(item => {
        if (item.Type === 'Tariff') {
          const paramList = PackagesStore.generateParametersByGroup(item);
          return (
            <div
              className="package-details__package-items-details-container"
              key={item.Id}
            >
              <h2 className="package-details__package-items-details-title">
                {item.MarketingProduct?.Title}
              </h2>
              <ParametersList
                paramList={Array.from(paramList)}
                contentType="numbers"
              />
            </div>
          );
        }
        if (item.Type === 'Device') {
          const featuresList = DevicesStore.generateFeaturesList(item);

          return (
            <div
              className="package-details__package-items-details-container"
              key={item.Id}
            >
              <h2 className="package-details__package-items-details-title">
                {item.MarketingProduct?.Title}
              </h2>
              <DeviceFeaturesTab featuresList={featuresList} />
            </div>
          );
        }
        return <div key={item.Id} />;
      })}
    </>
  );
};

export default PackageItemsDetails;
