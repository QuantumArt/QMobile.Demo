import { useObserver } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import connectStore from '../../../stores/connect/connect-store';
import ConnectForm from '../connect-form/connect-form';
import ServiceGroupContainer from '../connect-form/service-group-container';
import ConsructorRanges from './constructor-ranges';

const ConsructorPageContent = (): JSX.Element => {
  useEffect(() => {
    connectStore.initTariffConstructor();
  }, []);

  return useObserver(() => (
    <div className="constructor-page-content">
      <h1 className="page-content-title page-content-title--constructor">
        Соберите свой тариф
      </h1>
      <div className="flex-wrapper space-between">
        <div className="constructor-page-content__main-info">
          <ConsructorRanges />
        </div>
        <ConnectForm headerType="package">
          <ServiceGroupContainer
            servicesList={connectStore.services.servicesList}
          />
        </ConnectForm>
      </div>
    </div>
  ));
};

export default ConsructorPageContent;
