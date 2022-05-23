import { useObserver } from 'mobx-react-lite';
import React from 'react';
import ServiceDetailsPageContent from '../containers/service-details/service-details-page-content';
import PageWithSlider from './sub-component/page-with-slider';

const ServiceDetails = (): JSX.Element => {
  return useObserver(() => (
    <PageWithSlider
      sliderProps={{
        modificatorStyles:
          'slider--service-details slider--margin-bottom slider--text-paddings',
        title: 'Qmobile музыка',
        description:
          'Скачай любимое музыкальное приложение и наслаждайся треками',
      }}
      pageContentElem={<ServiceDetailsPageContent />}
    />
  ));
};

export default ServiceDetails;
