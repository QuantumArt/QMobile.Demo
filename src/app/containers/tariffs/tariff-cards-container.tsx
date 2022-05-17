import React from 'react';
import { useNavigate } from 'react-router-dom';
import TariffCard from '../../components/tariff-card';
import { ITariffsCardsGroup } from '../../../stores/tariffs/tariffs-cards-group';
import Loader from '../../components/loader';
import { BootState } from '../../enums/boot-state';
import { IParameters } from '../../types';

type IProps = {
  cardsGroup: ITariffsCardsGroup;
  bootState: BootState;
};

type IParameterNames =
  | 'Абонентская плата рублей в месяц'
  | 'Звонки на номера Qmobile минут в месяц'
  | 'Пакет интернета гигабайт в месяц';

type ParametrsList = {
  [key in IParameterNames]?: IParameters;
};

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
        const parameters = tariffData.Parameters.reduce<ParametrsList>(
          (acc, parameterData) => {
            const parameterName = `${parameterData.Title} ${parameterData?.Unit?.Title}`;
            return {
              ...acc,
              [parameterName]: parameterData,
            };
          },
          {},
        );

        return (
          <TariffCard
            key={tariffData.Id}
            title={tariffData.MarketingProduct.Title}
            image={tariffData.MarketingProduct.ListImage}
            isHit={Math.random() > 0.5}
            mobileTraffic={
              parameters?.['Звонки на номера Qmobile минут в месяц']?.NumValue
            }
            internetTrafic={
              parameters?.['Пакет интернета гигабайт в месяц']?.NumValue
            }
            tariffPrice={
              parameters?.['Абонентская плата рублей в месяц']?.NumValue
            }
            onConnectHandler={connectHandler(tariffData.Id)}
          />
        );
      })}
    </div>
  );
};

export default TariffCardsContainer;
