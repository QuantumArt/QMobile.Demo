import { useObserver } from 'mobx-react-lite';
import React, { FC, useEffect } from 'react';
import connectStore from '../../stores/connect/connect-store';
import ConnectForm from './connect-form/connect-form';
import ServiceGroupContainer from './connect-form/service-group-container';
import ConsructorRanges from './constructor-ranges';

const ConsructorPageContent: FC = () => {
  useEffect(() => {
    connectStore.initTariffConstructor();
  }, []);

  return useObserver(() => {
    return (
      <div className="constructor-page-content">
        <p className="page-content-title page-content-title--constructor">
          Соберите свой тариф
        </p>
        <div className="flex-wrapper space-between">
          <div className="constructor-page-content__main-info">
            <ConsructorRanges />
          </div>
          <ConnectForm headerType="package">
            <ServiceGroupContainer servicesList={connectStore.services.servicesList} />
          </ConnectForm>
        </div>
      </div>
    );
  });
};

export default ConsructorPageContent;
