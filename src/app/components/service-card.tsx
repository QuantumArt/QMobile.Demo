import React, { MouseEvent } from 'react';
import NewService from '../../assets/images/NewService.png';

type Props = {
  title: string;
  description: string;
  advantage?: string;
  image: string;
  isNew?: boolean;
  onClickHandler: () => void;
};

const ServiceCard = ({
  title,
  description,
  image,
  advantage,
  isNew,
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
        <div>{isNew && <img src={NewService} alt="new" />}</div>
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
