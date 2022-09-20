import { useObserver } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import pageLoaderStore from '../../../stores/page-loader/page-loader';
import servicesStore from '../../../stores/services/services-store';
import Loader from '../../components/loader';
import ServiceCard from '../../components/service-card';
import { BootState } from '../../enums/boot-state';

const ServicePageContent = (): JSX.Element => {
  useEffect(() => {
    servicesStore.init();
  }, []);

  const navigate = useNavigate();

  const onClick = (serviceId: number): void => {
    navigate(`${serviceId}`);
  };

  return useObserver(() =>
    pageLoaderStore.bootState === BootState.Loading ? (
      <Loader />
    ) : (
      <>
        {servicesStore.servicesList.map(service => {
          let isNew = false;
          const isNewModififcator =
            service?.Modifiers?.find(
              modificator => modificator.Alias === 'IsNew',
            ) ?? false;
          if (isNewModififcator) {
            isNew = true;
          }

          return (
            <ServiceCard
              key={service.Id}
              title={service.MarketingProduct.Title}
              description={service.MarketingProduct.Description}
              image={service.MarketingProduct.ListImage}
              isNew={isNew}
              onClickHandler={() => onClick(service.Id)}
              additionalInfo=""
            />
          );
        })}
      </>
    ),
  );
};

export default ServicePageContent;
