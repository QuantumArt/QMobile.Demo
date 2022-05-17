import { useObserver } from 'mobx-react-lite';
import React from 'react';
import CurrentPathInfo from '../components/current-path-info';
import Slider from '../components/slider';
import ConstructorPageContent from '../containers/constructor-content/constructor-page-content';

const TariffConstructor = (): JSX.Element =>
  useObserver(() => (
    <>
      <Slider
        modificatorStyles="slider--services slider--margin-bottom slider--text-paddings"
        title="Собери свой тариф!"
        description="Будь первым! Собери свой тариф без переплат"
      />
      <CurrentPathInfo />
      <ConstructorPageContent />
    </>
  ));

export default TariffConstructor;
