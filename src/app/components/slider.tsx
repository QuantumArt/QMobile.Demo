import React from 'react';

type IProps = {
  modificatorStyles?: string;
  title?: string;
  description?: string;
  style?: React.CSSProperties;
};

const Slider = ({
  modificatorStyles,
  title,
  description,
  style,
}: IProps): JSX.Element => {
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
