import React from 'react';
import cn from 'classnames';

import Benefits from '../../assets/icons/Benefits.svg';
import ConnectDetails from './connect-details';
import PrimaryButton from './primary-button';

type Props = {
  image: string;
  title: string;
  isHit?: boolean;
  internetTrafic?: number | string;
  mobileTraffic?: number | string;
  tariffPrice?: number;
  onConnectHandler: () => void;
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
  const internetTrafficStyles = cn('tariff-card__traffic-limit', {
    'tariff-card__traffic-limit--editable': typeof internetTrafic !== 'number',
  });
  const mobileTrafficStyles = cn('tariff-card__traffic-limit', {
    'tariff-card__traffic-limit--editable': typeof mobileTraffic !== 'number',
  });

  return (
    <div className="tariff-card">
      <div className="tariff-card__image">
        <img src={image} alt="card_image" />
        {isHit ? <div className="tariff-card__image-hit">Хит</div> : null}
      </div>
      <div className="tariff-card__content">
        <h2 className="tariff-card__title">{title}</h2>
        <p className={internetTrafficStyles}>{internetTrafic} ГБ</p>
        <p className={mobileTrafficStyles}>{mobileTraffic} минут</p>
        <div className="tariff-card__benefits">
          <img src={Benefits} alt="logo" />
          Преимущества
        </div>
        <div className="tariff-card__connect-container">
          <p className="tariff-card__connect-container-price">
            от {tariffPrice} ₽
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
              onClick={() => onConnectHandler()}
            />
            <ConnectDetails link="" />
          </div>
        </div>
      </div>
    </div>
  );
};

TariffCard.defaultProps = {
  isHit: false,
  internetTrafic: 'гибкое кол-во ',
  mobileTraffic: 'гибкое кол-во ',
  tariffPrice: 0,
};

export default TariffCard;
