import React from 'react';

import Benefits from '../../assets/icons/Benefits.svg';
import ConnectDetails from './connect-details';
import PrimaryButton from './primary-button';

type Props = {
  image: string;
  title: string;
  isHit?: boolean;
  internetTrafic?: number;
  mobileTraffic?: number;
  tariffPrice?: number;
  onConnectHandler?: () => void;
};

const TariffCard = ({
  image,
  title,
  isHit,
  mobileTraffic,
  internetTrafic,
  tariffPrice,
  onConnectHandler,
}: Props): JSX.Element => {
  return (
    <div className="tariff-card">
      <div className="tariff-card__image">
        <img src={image} alt="card_image" />
        {isHit ? <div className="tariff-card__image-hit">Хит</div> : null}
      </div>
      <div className="tariff-card__content">
        <h2 className="tariff-card__title">{title}</h2>
        <p className="tariff-card__traffic-limit">
          {internetTrafic ? internetTrafic : '-'} ГБ
        </p>
        <p className="tariff-card__traffic-limit">
          {mobileTraffic ? mobileTraffic : '-'} минут
        </p>
        <div className="tariff-card__benefits">
          <img src={Benefits} alt="logo" />
          Преимущества
        </div>
        <div className="tariff-card__connect-container">
          <p className="tariff-card__connect-container-price">
            {tariffPrice ? tariffPrice : '-'} ₽
            <span className="tariff-card__connect-container-days">
              За 30 дней
            </span>
          </p>
          <p className="tariff-card__connect-container-abon">
            Доступен абонемент
          </p>
          <div className="tariff-card__connect-btns-container">
            <PrimaryButton
              text="Подключить"
              onClick={() =>
                onConnectHandler ? onConnectHandler() : console.log('test')
              }
            />
            <ConnectDetails link="https://google.com" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TariffCard;
