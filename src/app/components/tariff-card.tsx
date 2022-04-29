import React, { FC } from 'react';

import Benefits from '../../assets/icons/Benefits.svg';
import ConnectDetails from './connect-details';
import PrimaryButton from './primary-button';

type Props = {
  image: string;
  title: string;
  isHit?: boolean
};

const TariffCard: FC<Props> = ({ image, title, isHit }) => {
  return (
    <div className="tariff-card">
      <div className="tariff-card__image">
        <img src={image} alt="card_image" />
        {isHit ? <div className='tariff-card__image-hit'>Хит</div> : null}
      </div>
      <div className="tariff-card__content">
        <p className="tariff-card__title">{title}</p>
        <p className="tariff-card__trafic-limit">30 ГБ</p>
        <p className="tariff-card__trafic-limit">600 минут</p>
        <div className="tariff-card__benefits">
          <img src={Benefits} alt="logo" />
          Преимущества
        </div>
        <div className="tariff-card__connect-container">
          <p className="tariff-card__connect-container-price">
            500 ₽
            <span className="tariff-card__connect-container-days">
              За 30 дней
            </span>
          </p>
          <p className="tariff-card__connect-container-abon">
            Доступен абонемент
          </p>
          <div className="tariff-card-connect-btns tariff-card__connect-btns-container">
            <PrimaryButton
              text="Подключить"
              onClickHandler={() => console.log('test')}
            />
            <ConnectDetails link="https://google.com"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TariffCard;
