import { useObserver } from 'mobx-react-lite';
import React, { FC } from 'react';
import CurrentPathInfo from '../components/current-path-info';
import Slider from '../components/slider';
import ConsructorPageContent from '../containers/constructor-page-content';

const TariffConsructor: FC = () => {
  return useObserver(() => (
    <>
      <Slider
        modificatorStyles="slider--services slider--margin-bottom slider--text-paddings"
        title="Собери свой тариф!"
        description="Будь первым! Собери свой тариф без переплат"
      />
      <CurrentPathInfo />
      <ConsructorPageContent />
    </>
  ));
};

export default TariffConsructor;
