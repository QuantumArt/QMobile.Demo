import React from 'react';

type Props = {
  image?: string;
  description?: string;
};

const AdvantageCard = ({ image, description }: Props): JSX.Element => {
  return (
    <div className="service-details__advantages-card-container">
      <div className="service-details__advantages-card-image">
        <img src={image} alt="logo" />
      </div>
      <p className="service-details__advantages-card-description">
        {description}
      </p>
    </div>
  );
};

AdvantageCard.defaultProps = {
  image: '',
  description: '',
};

export default AdvantageCard;
