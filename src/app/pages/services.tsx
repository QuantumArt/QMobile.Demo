import React from 'react';
import ServiceCard from '../components/service-card';
import PageWithCardsList from './sub-component/page-with-cards-list';

import TestImg from '../../assets/images/testservice.png';

const Services = (): JSX.Element => {
  return (
    <PageWithCardsList
      pageTitle="Услуги"
      cardsJsxElem={
        <ServiceCard
          title="Qmobile музыка"
          description="Скачай любимое музыкальное приложение и наслаждайся треками"
          adventage="Большой выбор только у нас!"
          image={TestImg}
        />
      }
    />
  );
};

export default Services;
