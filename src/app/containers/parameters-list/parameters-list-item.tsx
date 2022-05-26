import { useObserver } from 'mobx-react-lite';
import React from 'react';
import connectStore from '../../../stores/connect/connect-store';
import { IParameters } from '../../types';
import Parameter from './parameter';

type Props = {
  parameters: IParameters[];
  contentType: 'numbers' | 'text';
};

const ParametersListItem = ({
  parameters,
  contentType,
}: Props): JSX.Element => {
  return useObserver(() => (
    <>
      {parameters.map(parameter => {
        const priceFromServices = connectStore.activeBaseParameters
          .filter(baseParam => baseParam.Id === parameter?.BaseParameter?.Id)
          .reduce<number>((acc, baseParam) => acc + baseParam.Value, 0);
        return (
          <Parameter
            contentType={contentType}
            key={parameter.Id}
            parameter={parameter}
            newPrice={
              priceFromServices > 0
                ? priceFromServices + parameter.NumValue
                : undefined
            }
          />
        );
      })}
    </>
  ));
};

export default ParametersListItem;
