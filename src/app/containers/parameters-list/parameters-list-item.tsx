import React from 'react';
import { IParameters } from '../../types';

type Props = {
  parameters: IParameters[];
};

const ParametersListItem = ({ parameters }: Props): JSX.Element => (
  <>
    {parameters.map(parameter => (
      <div className="parameters-list-container__parameter" key={parameter.Id}>
        <p>{parameter.Title}</p>
        <p className="parameters-list-container__parameter-price">
          {parameter.NumValue} ₽
        </p>
      </div>
    ))}
  </>
);

export default ParametersListItem;
