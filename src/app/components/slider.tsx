import React, { FC } from 'react';

type IProps = {
  modificatorStyles?: string;
  title?: string;
  description?: string;
  style?: React.CSSProperties;
};

const Slider: FC<IProps> = ({
  modificatorStyles,
  title,
  description,
  style,
}) => {
  return (
    <div className={`slider ${modificatorStyles}`} style={style}>
      <div className="slider__info-container">
        <p className="slider__title">{title}</p>
        <p className="slider__description">{description}</p>
      </div>
    </div>
  );
};

export default Slider;
