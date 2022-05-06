import React, { FC } from 'react';
import TariffCard from '../../components/tariff-card';
import CardDemo from '../../../assets/images/Card_Demo.png';
import { ITariffsCardsGroup } from '../../../stores/tariffs/tariffs-cards-group';
import Loader from '../../components/loader';
import { BootState } from '../../enums/boot-state';

type IProps = {
  cardsGroup: ITariffsCardsGroup;
  bootState: BootState;
};

const TariffCardsContainer: FC<IProps> = ({ cardsGroup, bootState }) => {
  return bootState === BootState.Loading ? (
    <Loader />
  ) : (
    <div className="tariffs-container__cards-container">
      {cardsGroup.map(el => {
        return (
          <TariffCard
            key={el.Id}
            title={el.MarketingProduct.Category.Title}
            image={CardDemo}
            isHit={true}
          />
        );
      })}
    </div>
  );
};

export default TariffCardsContainer;
