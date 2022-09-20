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
        return (
          <Parameter
            contentType={contentType}
            key={parameter.Id}
            parameter={parameter}
            oldPrice={parameter?.OldNumValue}
          />
        );
      })}
    </>
  ));
};

export default ParametersListItem;
