import React from 'react';
import Star from '../../assets/icons/Star.svg';
import ConnectDetails from './connect-details';
import PrimaryButton from './primary-button';

type Props = {
  image: string;
  title: string;
  description: string;
  price?: number;
  rating: number;
  commentsCount: number;
  isHit?: boolean;
  onConnectHandler?: () => void;
  aboutLink: string;
};

const DeviceCard = ({
  image,
  title,
  description,
  price,
  isHit,
  rating,
  commentsCount,
  aboutLink,
  onConnectHandler,
}: Props): JSX.Element => {
  return (
    <div className="device-card">
      <div className="device-card__image">
        <img src={image} alt="card_image" />
        {isHit ? <div className="device-card__image-hit">Хит</div> : null}
      </div>
      <div className="device-card__container">
        <div className="device-card__info-container">
          <p className="device-card__price">
            {price ? Intl.NumberFormat('ru-RU').format(price) : 0} ₽
          </p>
          <p className="device-card__title">{title}</p>
          <p className="device-card__description">{description}</p>
          <div className="device-card__rating-container">
            <div className="device-card__stars-container">
              {Array.from({ length: rating }, (_, i) => (
                <img src={Star} alt="star" key={i} />
              ))}
            </div>
            <p className="device-card__comments-count">({commentsCount})</p>
          </div>
        </div>
      </div>
      <div className="device-card__buy-container">
        <PrimaryButton
          text="Купить"
          onClick={() =>
            onConnectHandler ? onConnectHandler() : console.log('test')
          }
          classNames="device-card__buy-btn"
        />
        <ConnectDetails link={aboutLink} />
      </div>
    </div>
  );
};

export default DeviceCard;
