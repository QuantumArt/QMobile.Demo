import { useObserver } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import packagesStore from '../../../stores/packages/packages-store';
import ServiceCard from '../../components/service-card';

const PackagesPageContent = (): JSX.Element => {
  useEffect(() => {
    packagesStore.init();
  }, []);

  const navigate = useNavigate();

  const onClick = (serviceId: number): void => {
    navigate(`${serviceId}`);
  };

  return useObserver(() => (
    <>
      {packagesStore.packagesList.map(packageItem => (
        <ServiceCard
          key={packageItem.Id}
          title={packageItem.MarketingProduct.Title}
          description={packageItem.MarketingProduct.Description}
          image={packageItem.MarketingProduct.ListImage}
          isNew={Math.random() > 0.5}
          onClickHandler={() => onClick(packageItem.Id)}
        />
      ))}
    </>
  ));
};

export default PackagesPageContent;
