import React from 'react';
import cn from 'classnames';
import { IParameters } from '../../types';

type Props = {
  parameter: IParameters;
  oldPrice?: number;
  contentType: 'numbers' | 'text';
};

const Parameter = ({
  parameter,
  oldPrice,
  contentType,
}: Props): JSX.Element => {
  const parameterStyles = cn('parameters-list-container__parameter', {
    'parameters-list-container__parameter--active': oldPrice,
  });

  const priceStyles = cn({
    'parameters-list-container__parameter-price--crossed': oldPrice,
  });

  return (
    <div className={parameterStyles} key={parameter.Id}>
      {contentType === 'numbers' ? (
        <>
          <p>{parameter.Title}</p>
          <p className="parameters-list-container__parameter-price">
            <span className={priceStyles}>
              {oldPrice ?? parameter.NumValue}
            </span>{' '}
            {oldPrice && (
              <span className="parameters-list-container__parameter-new-price">
                {parameter.NumValue}
              </span>
            )}{' '}
            {parameter?.Unit?.Display}
          </p>
        </>
      ) : (
        <span>{parameter.Value}</span>
      )}
    </div>
  );
};

Parameter.defaultProps = {
  oldPrice: undefined,
};

export default Parameter;
