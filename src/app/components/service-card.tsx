import React from 'react';
import NewService from '../../assets/images/NewService.png';

type Props = {
  title: string;
  description: string;
  adventage?: string;
  image: string;
  isNew?: boolean;
};

const ServiceCard = ({
  title,
  description,
  image,
  adventage,
  isNew,
}: Props): JSX.Element => {
  return (
    <div className="service-card__container">
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
  adventage: '',
  isNew: false,
};

export default ServiceCard;
