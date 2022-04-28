import { useObserver } from 'mobx-react-lite';
import React, { FC } from 'react';
import CurrentPathInfo from '../components/current-path-info';
import Slider from '../components/slider';
import TariffsPageContent from '../containers/tariffs-page-content';

const Tariffs: FC = () => {
  return useObserver(() => (
    <>
      <Slider
        modificatorStyles="slider--tariffs slider--margin-bottom slider--text-paddings"
        title="Тарифы “Объединяй”!"
        description="Единный счет для домашнего интернета, ТВ и связи"
      />
      <CurrentPathInfo />
      <TariffsPageContent />
    </>
  ));
};

export default Tariffs;
