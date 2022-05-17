import React from 'react';
import { IParameters } from '../../types';
import Accordion from '../accordion';
import ParametersListItem from './parameters-list-item';

type Props = {
  paramList: [groupId: number, value: IParameters[]][];
};

const ParametersList = ({ paramList }: Props): JSX.Element => (
  <>
    {paramList.map(([groupId, value]) => (
      <div className="parameters-list-container__item" key={groupId}>
        <Accordion
          title={value[0].Group.Title}
          iconPosition="left"
          body={<ParametersListItem parameters={value} />}
        />
      </div>
    ))}
  </>
);

export default ParametersList;
