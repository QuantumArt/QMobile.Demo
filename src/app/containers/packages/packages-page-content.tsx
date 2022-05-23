import { useObserver } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import packagesStore from '../../../stores/packages/packages-store';
import ServiceCard from '../../components/service-card';

const PackagesPageContent = (): JSX.Element => {
  useEffect(() => {
    packagesStore.init();
  }, []);

  return useObserver(() => (
    <>
      {packagesStore.packagesList.map(packageItem => (
        <ServiceCard
          key={packageItem.Id}
          title={packageItem.MarketingProduct.Title}
          description={packageItem.MarketingProduct.Description}
          image={packageItem.MarketingProduct.ListImage}
          isNew={Math.random() > 0.5}
          onClickHandler={() => console.log('Заглушка')}
        />
      ))}
    </>
  ));
};

export default PackagesPageContent;
