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
      {servicesStore.servicesList.map(service => (
        <ServiceCard
          key={service.Id}
          title={service.MarketingProduct.Title}
          description={service.MarketingProduct.Description}
          image={service.MarketingProduct.ListImage}
          isNew={Math.random() > 0.5}
          onClickHandler={() => onClick(service.Id)}
        />
      ))}
    </>
  ));
};

export default ServicePageContent;
