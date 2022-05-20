import React from 'react';
import PageWithCardsList from './sub-component/page-with-cards-list';
import ServicePageContent from '../containers/services/services-page-content';

const Services = (): JSX.Element => {
  return (
    <PageWithCardsList
      pageTitle="Услуги"
      cardsJsxElem={<ServicePageContent />}
    />
  );
};

export default Services;
