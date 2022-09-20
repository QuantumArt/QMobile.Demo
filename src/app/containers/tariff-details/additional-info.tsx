import React from 'react';
import { IParameters } from '../../types';
import Accordion from '../accordion';
import MinusOpened from '../../../assets/icons/MinusOpened.svg';
import PlusClosed from '../../../assets/icons/PlusClosed.svg';

type Props = {
  paramList: [groupId: number, value: IParameters[]][];
};

const AdditionalInfo = ({ paramList }: Props): JSX.Element => (
  <div className="tariff-details-additional-info">
    <p className="page-content-title">Дополнительная информация</p>
    {paramList.map(([groupId, value]) => (
      <React.Fragment key={groupId}>
        {value.map(parameter => (
          <div key={parameter.Id} className="tariff-details-additional-item">
            <Accordion
              title={parameter.Title}
              iconPosition="left"
              iconOpened={<img src={MinusOpened} alt="opened" />}
              iconClosed={<img src={PlusClosed} alt="closed" />}
              body={
                <p className="tariff-details__additional-value">
                  {parameter.Value}
                </p>
              }
            />
          </div>
        ))}
      </React.Fragment>
    ))}
  </div>
);

export default AdditionalInfo;
