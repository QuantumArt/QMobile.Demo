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
      {packagesStore.packagesList.map(packageItem => {
        let isNew = false;

        const isNewModififcator =
          packageItem?.Modifiers?.find(
            modificator => modificator.Alias === 'IsNew',
          ) ?? false;

        if (isNewModififcator) {
          isNew = true;
        }
        return (
          <ServiceCard
            key={packageItem.Id}
            title={packageItem.MarketingProduct.Title}
            description={packageItem.MarketingProduct.Description}
            image={
              packageItem.Images?.find(image => image.Type.Alias === 'list')
                ?.Image ?? ''
            }
            isNew={isNew}
            onClickHandler={() => onClick(packageItem.Id)}
            additionalInfo={packageItem.MarketingProduct.KitType?.Title ?? ''}
          />
        );
      })}
    </>
  ));
};

export default PackagesPageContent;
