import React from 'react';
import cn from 'classnames';
import { IParameters } from '../../types';

type Props = {
  parameter: IParameters;
  newPrice?: number;
};

const Parameter = ({ parameter, newPrice }: Props): JSX.Element => {
  const parameterStyles = cn('parameters-list-container__parameter', {
    'parameters-list-container__parameter--active': newPrice,
  });

  const priceStyles = cn({
    'parameters-list-container__parameter-price--crossed': newPrice,
  });

  return (
    <div className={parameterStyles} key={parameter.Id}>
      <p>{parameter.Title}</p>
      <p className="parameters-list-container__parameter-price">
        <span className={priceStyles}>{parameter.NumValue}</span>{' '}
        {newPrice && (
          <span className="parameters-list-container__parameter-new-price">
            {newPrice}
          </span>
        )}{' '}
        {parameter?.Unit?.Display}
      </p>
    </div>
  );
};

Parameter.defaultProps = {
  newPrice: undefined,
};

export default Parameter;
