import { useObserver } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import servicesStore from '../../../stores/services/services-store';
import ServiceCard from '../../components/service-card';

const ServicePageContent = (): JSX.Element => {
  useEffect(() => {
    servicesStore.init();
  }, []);

  const navigate = useNavigate();

  const onClick = (serviceId: number): void => {
    navigate(`${serviceId}`);
  };

  return useObserver(() => (
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
  ));
};

export default ServicePageContent;
