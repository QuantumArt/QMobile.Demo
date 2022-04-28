import React, { FC } from 'react';
import tariffsStore from '../../stores/tariffs/tariffs-store';
import TariffsFilterBtn from '../components/tariffs-filter-btn';
import { BootState } from '../enums/boot-state';
import RightArrowFilters from '../../assets/icons/RightArrowFilters.svg';

type Props = {
  bootState: BootState;
  activeFilter: string;
};

const TariffsFilter: FC<Props> = ({ bootState, activeFilter }) => {
  const onClickHandler = (filterAlias: string) => () => {
    tariffsStore.setFilter(filterAlias);
  };

  return bootState === BootState.Loading ? (
    <p>Loading</p>
  ) : (
    <ul className="tariffs-filter-list">
      {tariffsStore.filtersGroups.map(({ alias, name }) => (
        <li key={alias} className="tariffs-filter-list__item">
          <TariffsFilterBtn
            name={name}
            onClickHandler={onClickHandler(alias)}
          />
          {activeFilter === alias ? (
            <img src={RightArrowFilters} alt=">" />
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default TariffsFilter;
