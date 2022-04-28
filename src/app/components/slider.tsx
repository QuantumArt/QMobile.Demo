import React, { FC } from 'react';

type IProps = {
  modificatorStyles?: string;
  title?: string;
  description?: string;
};

const Slider: FC<IProps> = ({ modificatorStyles, title, description }) => {
  return (
    <div className={`slider ${modificatorStyles}`}>
      <div>
        <p className="slider__title">{title}</p>
        <p className="slider__description">{description}</p>
      </div>
    </div>
  );
};

export default Slider;
