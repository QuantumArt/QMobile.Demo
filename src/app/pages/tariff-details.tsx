import { useObserver } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import connectStore from '../../stores/connect/connect-store';
import CurrentPathInfo from '../components/current-path-info';
import Slider from '../components/slider';
import TariffDetailsPageContent from '../containers/tariff-details/tariff-details-page-content';

const TariffDetails = (): JSX.Element => {
  const location = useLocation();
  useEffect(() => {
    const tariffId = location.pathname.split('/').slice(-1);
    connectStore.fetchTariff(tariffId[0]);
  }, [location.pathname]);

  return useObserver(() => (
    <>
      <Slider
        modificatorStyles="slider--tariff-details slider--margin-bottom slider--text-paddings"
        title={connectStore.currentTariff?.MarketingProduct?.Title}
        description={connectStore.currentTariff?.MarketingProduct?.Description}
      />
      <CurrentPathInfo
        pathNames={[`/${connectStore.currentTariff?.MarketingProduct?.Title}`]}
      />
      <TariffDetailsPageContent />
    </>
  ));
};

export default TariffDetails;
