import { useObserver } from 'mobx-react-lite';
import React from 'react';
import PrimaryButton from '../../components/primary-button';
import { InfoDataType } from './device-details-page-content';

type Props = {
  data: InfoDataType;
};

const MainInfo = ({
  data: { mainTitle, price, shortFeatures },
}: Props): JSX.Element => {
  return (
    <div className="device-details__main-info-container">
      <h2 className="device-details__main-info-title">{mainTitle}</h2>
      <div className="device-details__price-container">
        <p>{price} ₽</p>
        <PrimaryButton text="Купить" onClick={() => console.log('Зашлушка')} />
      </div>
      <div className="device-details__delivery-info">
        <p>Есть самовывозом из 1 салона, сегодня</p>
        <p>
          Есть c доставкой — бесплатно или экспресс от 90 минут по Москве в
          пределах МКАД
        </p>
      </div>
      <div className="device-details__short-features-container">
        <h3 className="device-details__short-features-title">
          Краткие характеристики
        </h3>
        <ul className="device-details__short-features-list">
          {shortFeatures.map(el => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainInfo;
