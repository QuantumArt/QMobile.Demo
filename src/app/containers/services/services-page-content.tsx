import { useObserver } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import servicesStore from '../../../stores/services/services-store';
import ServiceCard from '../../components/service-card';

const ServicePageContent = (): JSX.Element => {
  useEffect(() => {
    servicesStore.init();
  }, []);

  return useObserver(() => (
    <>
      {servicesStore.servicesList.map(service => (
        <ServiceCard
          key={service.Id}
          title={service.MarketingProduct.Title}
          description={service.MarketingProduct.Description}
          image={service.MarketingProduct.ListImage}
          isNew={Math.random() > 0.5}
          onClick={() => console.log('Заглушка')}
        />
      ))}
    </>
  ));
};

export default ServicePageContent;
