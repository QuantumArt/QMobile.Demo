import { useObserver } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import servicesStore from '../../stores/services/services-store';
import ServiceDetailsPageContent from '../containers/service-details/service-details-page-content';
import PageWithSlider from './sub-component/page-with-slider';

const ServiceDetails = (): JSX.Element => {
  const location = useLocation();
  useEffect(() => {
    const serviceId = location.pathname.split('/').slice(-1);
    servicesStore.fetchService(serviceId[0]);
  }, [location.pathname]);
  return useObserver(() => (
    <PageWithSlider
      sliderProps={{
        modificatorStyles: 'slider--margin-bottom slider--text-paddings',
        title: `${servicesStore.currentService?.MarketingProduct.Title}`,
        description: `${
          servicesStore.currentService?.MarketingProduct.Description ?? ''
        }`,
        styles: {
          background: `url(${servicesStore.currentService?.MarketingProduct.DetailsImage}) no-repeat bottom 0 right 0 #F1F1F1`,
        },
      }}
      currentPathProps={{
        elementName: servicesStore.currentService?.MarketingProduct.Title,
      }}
      pageContentElem={
        <ServiceDetailsPageContent
          title={servicesStore.currentService?.MarketingProduct.Title}
        />
      }
    />
  ));
};

export default ServiceDetails;
