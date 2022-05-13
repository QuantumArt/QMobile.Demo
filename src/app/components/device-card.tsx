import React from 'react';

type Props = {
  image: string;
  title: string;
  description: string;
  price: number;
  isHit?: boolean
};

const DeviceCard = ({image, title, description, price, isHit}: Props): JSX.Element => {
  return (
    <div className="device-card">
      {' '}
      <div className="device-card__image">
        <img src={image} alt="card_image" />
        {isHit ? <div className="device-card__image-hit">Хит</div> : null}
      </div>
    </div>
  );
};

export default DeviceCard;
