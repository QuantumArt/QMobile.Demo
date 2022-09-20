import React from 'react';
import PageWithSlider from './sub-component/page-with-slider';
import DevicesPageContent from '../containers/devices/devices-page-content';

const Devices = (): JSX.Element => (
  <PageWithSlider
    sliderProps={{
      modificatorStyles:
        'slider--devices slider--margin-bottom slider--text-paddings',
      title: 'Тарифы “Объединяй”!',
      description: 'Единый счет для домашнего интернета, ТВ и связи',
    }}
    pageContentElem={<DevicesPageContent />}
  />
);

export default Devices;
