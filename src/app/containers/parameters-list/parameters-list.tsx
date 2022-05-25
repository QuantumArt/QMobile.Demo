import { useObserver } from 'mobx-react-lite';
import React from 'react';
import connectStore from '../../../stores/connect/connect-store';
import { IParameters } from '../../types';
import Accordion from '../accordion';
import ParametersListItem from './parameters-list-item';

type Props = {
  paramList: [groupId: number, value: IParameters[]][];
};

const ParametersList = ({ paramList }: Props): JSX.Element => {
  return useObserver(() => (
    <>
      {paramList.map(([groupId, value]) => {
        return (
          <div className="parameters-list-container__item" key={groupId}>
            <Accordion
              title={value[0].Group.Title}
              iconPosition="left"
              body={<ParametersListItem parameters={value} />}
              active={connectStore.activeParametersGroups.includes(groupId)}
            />
          </div>
        );
      })}
    </>
  ));
};

export default ParametersList;
