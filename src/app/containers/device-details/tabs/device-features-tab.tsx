import { useObserver } from 'mobx-react-lite';
import React from 'react';
import devicesStore from '../../../../stores/devices/devices-store';
import { IFeatureItem } from '../../../types';

type Props = {
  featuresList?: Map<string, IFeatureItem[]>;
};

const DeviceFeaturesTab = ({ featuresList }: Props): JSX.Element => {
  return useObserver(() => (
    <>
      {Array.from(featuresList ?? devicesStore.featuresList).map(
        ([header, features]) => (
          <div key={header} className="device-details__feature-tab-container">
            <h3 className="device-details__feature-tab-header">{header}</h3>
            {features.map(({ property, value, id }) => (
              <div
                className="device-details__feature-tab-item-container"
                key={id}
              >
                <p className="device-details__feature-tab-item-container-property">
                  {property}
                </p>
                <p className="device-details__feature-tab-item-container-value">
                  {value}
                </p>
              </div>
            ))}
          </div>
        ),
      )}
    </>
  ));
};
export default DeviceFeaturesTab;
