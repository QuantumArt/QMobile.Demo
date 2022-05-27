import { useObserver } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import connectStore from '../../stores/connect/connect-store';
import PageWithSlider from './sub-component/page-with-slider';
import TariffDetailsPageContent from '../containers/tariff-details/tariff-details-page-content';

const TariffDetails = (): JSX.Element => {
  const location = useLocation();
  useEffect(() => {
    const tariffId = location.pathname.split('/').slice(-1);
    connectStore.fetchTariff(tariffId[0]);
  }, [location.pathname]);

  useEffect(() => () => {
    connectStore.unmount();
  });

  return useObserver(() => (
    <PageWithSlider
      sliderProps={{
        modificatorStyles:
          'slider--tariff-details slider--margin-bottom slider--text-paddings',
        title: `${connectStore.currentTariff?.MarketingProduct.Title}`,
        description: `${
          connectStore.currentTariff?.MarketingProduct.Description ?? ''
        }`,
        styles: {
          background: `url(${connectStore.currentTariff?.MarketingProduct?.DetailsImage}) no-repeat`,
        },
      }}
      currentPathProps={{
        elementName: `${
          connectStore.currentTariff?.MarketingProduct?.Title ?? ''
        }`,
      }}
      pageContentElem={<TariffDetailsPageContent />}
    />
  ));
};

export default TariffDetails;
