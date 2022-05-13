import React, { FC } from 'react';
import tariffsStore from '../../../stores/tariffs/tariffs-store';
import TariffsFilterBtn from './tariffs-filter-btn';
import { BootState } from '../../enums/boot-state';
import RightArrowFilters from '../../../assets/icons/RightArrowFilters.svg';
import Loader from '../../components/loader';

type Props = {
  bootState: BootState;
  activeFilter: string;
};

const TariffsFilter = (
  {
    bootState,
    activeFilter
  }: Props
) => {
  const onClickHandler = (filterAlias: string) => () => {
    tariffsStore.setFilter(filterAlias);
    tariffsStore.fetchTariffs();
  };

  return bootState === BootState.Loading ? (
    <Loader />
  ) : (
    <ul className="tariffs-filter-list">
      {tariffsStore.filtersGroups.map(({ Alias, Title }) => (
        <li key={Alias} className="tariffs-filter-list__item">
          <TariffsFilterBtn
            title={Title}
            onClick={onClickHandler(Alias)}
          />
          {activeFilter === Alias ? (
            <img src={RightArrowFilters} alt=">" />
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default TariffsFilter;
