import React from 'react';

type IProps = {
  modificatorStyles?: string;
  title?: string;
  description?: string;
};

const Slider = ({
  modificatorStyles,
  title,
  description,
}: IProps): JSX.Element => (
  <div className={`slider ${modificatorStyles}`}>
    <div className="slider__info-container">
      <p className="slider__title">{title}</p>
      <p className="slider__description">{description}</p>
    </div>
  </div>
);

Slider.defaultProps = {
  modificatorStyles: '',
  title: '',
  description: '',
};

export default Slider;
