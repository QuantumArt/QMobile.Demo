import React from 'react';
import { useNavigate } from 'react-router-dom';
import TariffCard from '../../components/tariff-card';
import {
  ITariffsCardsGroup,
  TariffCard as TariffCardType,
} from '../../../stores/tariffs/tariffs-cards-group';
import Loader from '../../components/loader';
import { BootState } from '../../enums/boot-state';
import { IParameters } from '../../types';

type IProps = {
  cardsGroup: ITariffsCardsGroup;
  bootState: BootState;
};

type IParameterIds = '8476' | '8488' | '8487';

export type ParametersList = {
  [key in IParameterIds]?: IParameters;
};

export const getParametersByNames = (
  tariffData: TariffCardType,
): ParametersList =>
  tariffData.Parameters.reduce<ParametersList>((acc, parameterData) => {
    const parameterName = `${parameterData.BaseParameter?.Id}`;
    return {
      ...acc,
      [parameterName]: parameterData,
    };
  }, {});

const TariffCardsContainer = ({
  cardsGroup,
  bootState,
}: IProps): JSX.Element => {
  const navigate = useNavigate();

  const connectHandler = (tariffId: number) => () => {
    navigate(`${tariffId}`);
  };

  return bootState === BootState.Loading ? (
    <Loader />
  ) : (
    <div className="tariffs-page-content__tariff-cards-container">
      {cardsGroup.map(tariffData => {
        const parameters = getParametersByNames(tariffData);
        let isHit = false;
        const isHitModificator =
          tariffData?.Modifiers?.find(
            modificator => modificator.Alias === 'Recommend',
          ) ?? false;
        if (isHitModificator) {
          isHit = true;
        }
        return (
          <TariffCard
            key={tariffData.Id}
            title={tariffData.MarketingProduct.Title}
            image={tariffData.MarketingProduct.ListImage}
            isHit={isHit}
            mobileTraffic={parameters?.['8488']?.NumValue}
            internetTrafic={parameters?.['8487']?.NumValue}
            tariffPrice={parameters?.['8476']?.NumValue}
            onConnectHandler={connectHandler(tariffData.Id)}
          />
        );
      })}
    </div>
  );
};

export default TariffCardsContainer;
