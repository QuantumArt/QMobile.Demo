import React from 'react';
import PageWithSlider from './sub-component/page-with-slider';
import TariffsPageContent from '../containers/tariffs/tariffs-page-content';

const Tariffs = (): JSX.Element => (
  <PageWithSlider
    sliderProps={{
      modificatorStyles:
        'slider--tariffs slider--margin-bottom slider--text-paddings',
      title: 'Тарифы “Объединяй”!',
      description: 'Единый счет для домашнего интернета, ТВ и связи',
    }}
    pageContentElem={<TariffsPageContent />}
  />
);

export default Tariffs;
