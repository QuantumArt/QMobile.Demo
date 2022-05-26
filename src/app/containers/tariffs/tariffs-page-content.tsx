import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';
import TariffsFilter from './tariffs-filter';
import tariffsStore from '../../../stores/tariffs/tariffs-store';
import TariffSearch from '../../components/search-input';
import MakeTariffLink from './make-tariff-link';
import TariffCardsContainer from './tariff-cards-container';

const TariffsPageContent = (): JSX.Element => {
  useEffect(() => {
    tariffsStore.init();
    return () => {
      tariffsStore.unmount();
    };
  }, []);

  return useObserver(() => (
    <div className="tariffs-page-content">
      <div className="flex-wrapper">
        <div className="tariffs-page-content__tariffs-filter-container">
          <h2 className="page-content-title page-content-title--tariffs-filter">
            Тарифы
          </h2>
          <TariffsFilter
            bootState={tariffsStore.bootState}
            activeFilter={tariffsStore.selectedFilter}
          />
        </div>
        <div className="tariffs-page-content__container">
          <TariffCardsContainer
            cardsGroup={tariffsStore.tariffsCardsGroup}
            bootState={tariffsStore.bootStateTariffCards}
          />
        </div>
      </div>
    </div>
  ));
};

export default TariffsPageContent;
