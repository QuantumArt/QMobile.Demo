import { useObserver } from 'mobx-react-lite';
import React, { FC } from 'react';
import CurrentPathInfo from '../components/current-path-info';
import Slider from '../components/slider';

const DevicesPage: FC = () => {
  return useObserver(() => (
    <>
      <Slider
        modificatorStyles="slider--devices slider--margin-bottom slider--text-paddings"
        title="Тарифы “Объединяй”!"
        description="Единный счет для домашнего интернета, ТВ и связи"
      />
      <CurrentPathInfo />
    </>
  ));
};

export default DevicesPage;
