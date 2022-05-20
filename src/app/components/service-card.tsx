import React from 'react';

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
        {adventage && <p className="service-card__advantage">{adventage}</p>}
        {isNew && <div>New</div>}
        <img src={image} alt="logo" className="service-card__image" />
      </div>
    </div>
  );
};

ServiceCard.defaultProps = {
  adventage: '',
  isNew: false,
};

export default ServiceCard;
