import React, { CSSProperties } from 'react';

export type IProps = {
  modificatorStyles?: string;
  title?: string;
  description?: string;
  styles?: CSSProperties;
};

const Slider = ({
  modificatorStyles,
  title,
  description,
  styles,
}: IProps): JSX.Element => (
  <div className={`slider ${modificatorStyles}`} style={styles}>
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
  styles: {},
};

export default Slider;
