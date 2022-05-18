import { useObserver } from 'mobx-react-lite';
import React from 'react';

type Props = {
  mainInfoTitle: string;
  price: number;
};

const MainInfo = ({ mainInfoTitle, price }: Props): JSX.Element => {
  return (
    <div className="device-details__main-info-container">
      <h2 className="device-details__main-info-title">{mainInfoTitle}</h2>
      <div className="device-details__price-container">{price}</div>
    </div>
  );
};

export default MainInfo;
