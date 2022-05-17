import React from 'react';

type Props = {
  min: number;
  max: number;
  value: number;
  valueDesc?: string;
  onDragHandler: (value: number) => void;
  titleText?: string;
  logosrc?: string;
};

const Range = ({
  min,
  max,
  value,
  onDragHandler,
  valueDesc,
  titleText,
  logosrc,
}: Props): JSX.Element => {
  const backgroundSize = `${((value - min) * 100) / (max - min)}% 100%`;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const numberValue = parseInt(e.target.value, 10);
    onDragHandler(numberValue);
  };

  return (
    <div className="range-container">
      {logosrc || titleText ? (
        <div className="range-container__title">
          {logosrc ? (
            <img src={logosrc} alt="logo" className="range-container__logo" />
          ) : null}
          <span>{titleText}</span>
        </div>
      ) : null}
      <input
        type="range"
        className="range-container__range-input"
        min={min}
        max={max}
        value={value}
        onChange={onChangeHandler}
        style={{ backgroundSize }}
      />
      <div className="range-container__min-max-container">
        <p>
          {min} {valueDesc}
        </p>
        <p>
          {max} {valueDesc}
        </p>
      </div>
    </div>
  );
};

Range.defaultProps = {
  valueDesc: '',
  titleText: '',
  logosrc: '',
};

export default Range;
