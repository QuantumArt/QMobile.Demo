import React, { useEffect } from 'react';
import TariffsFilter from './tariffs-filter';
import { useObserver } from 'mobx-react-lite';
import tariffsStore from '../../../stores/tariffs/tariffs-store';
import TariffSearch from '../../components/search-input';
import MakeTariffLink from '../../components/make-tariff-link';
import TariffCardsContainer from './tariff-cards-container';

const TariffsPageContent = (): JSX.Element => {
  useEffect(() => {
    tariffsStore.init();
    return () => {
      tariffsStore.unmount();
    };
  }, []);

  const searchHandler = (value: string) => {
    alert(value);
  };

  return useObserver(() => (
    <div className="tariffs-page-content">
      <div className="flex-wrapper">
        <div className="tariffs-filter-wrapper">
          <p className="page-content-title page-content-title--tariffs-filter">
            Тарифы
          </p>
          <TariffsFilter
            bootState={tariffsStore.bootState}
            activeFilter={tariffsStore.selectedFilter}
          />
        </div>
        <div className="tariffs-container">
          <div className="tariffs-container-header">
            <TariffSearch
              onSubmit={searchHandler}
              sizeStyles="tariff-search"
              placeholder="Поиск тарифа"
            />
            <MakeTariffLink />
          </div>
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
