import { useObserver } from 'mobx-react-lite';
import React from 'react';
import { InfoDataType } from './device-details-page-content';

type Props = {
  data: InfoDataType;
};

const MainInfo = ({ data: { mainTitle, price } }: Props): JSX.Element => {
  return (
    <div className="device-details__main-info-container">
      <h2 className="device-details__main-info-title">{mainTitle}</h2>
      <div className="device-details__price-container">{price}</div>
    </div>
  );
};

export default MainInfo;
