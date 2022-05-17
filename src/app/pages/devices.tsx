import { useObserver } from 'mobx-react-lite';
import React from 'react';
import CurrentPathInfo from '../components/current-path-info';
import Slider from '../components/slider';
import DevicesPageContent from '../containers/devices/devices-page-content';

const DevicesPage = (): JSX.Element =>
  useObserver(() => (
    <>
      <Slider
        modificatorStyles="slider--devices slider--margin-bottom slider--text-paddings"
        title="Тарифы “Объединяй”!"
        description="Единный счет для домашнего интернета, ТВ и связи"
      />
      <CurrentPathInfo />
      <DevicesPageContent />
    </>
  ));

export default DevicesPage;
