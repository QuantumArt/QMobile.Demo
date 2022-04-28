import React, { FC } from 'react';

import Benefits from '../../assets/icons/Benefits.svg';

type Props = {
  image: string;
  title: string;
};

const TariffCard: FC<Props> = ({ image, title }) => {
  return (
    <div className="tariff-card">
      <div className="tariff-card__image">
        <img src={image} alt="card_image" />
      </div>
      <div className="tariff-card__content">
        <p className="tariff-card__title">{title}</p>
        <p className="tariff-card__trafic-limit">30 ГБ</p>
        <p className="tariff-card__trafic-limit">600 минут</p>
        <div className="tariff-card__benefits">
          <img src={Benefits} alt="logo" />
          Преимущества
        </div>
        <div className='tariff-card__connect-container'>
          <p className='tariff-card__connect-container-price'>500 ₽ <span className='tariff-card__connect-container-days'>За 30 дней</span></p>
          <p className='tariff-card__connect-container-abon'>Доступен абонемент</p>
        </div>
      </div>
    </div>
  );
};

export default TariffCard;
