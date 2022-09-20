import React, { MouseEvent } from 'react';
import NewService from '../../assets/images/NewService.svg';

type Props = {
  title: string;
  description: string;
  advantage?: string;
  image: string;
  isNew?: boolean;
  additionalInfo: string;
  onClickHandler: () => void;
};

const ServiceCard = ({
  title,
  description,
  image,
  advantage,
  isNew,
  additionalInfo,
  onClickHandler,
}: Props): JSX.Element => {
  return (
    <div
      className="service-card__container"
      onClick={onClickHandler}
      role="presentation"
    >
      <h5 className="service-card__title">{title}</h5>
      <p className="service-card__description">{description}</p>
      <div className="service-card__flex-container">
        <div className="service-card__additional-info-container">
          {isNew && (
            <img
              src={NewService}
              alt="new"
              className="service-card__additional-info-container-item-new"
            />
          )}
          {additionalInfo.length > 0 && (
            <p className="service-card__additional-info-container-additional-info">
              {additionalInfo}
            </p>
          )}
        </div>
        <div className="service-card__image">
          <img src={image} alt="logo" />
        </div>
      </div>
    </div>
  );
};

ServiceCard.defaultProps = {
  advantage: '',
  isNew: false,
};

export default ServiceCard;
