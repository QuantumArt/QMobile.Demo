import { useObserver } from 'mobx-react-lite';
import React, { FC } from 'react';
import connectStore from '../../../stores/connect/connect-store';
import ConnectForm from '../connect-form/connect-form';
import ServiceGroupContainer from '../connect-form/service-group-container';

const TariffDetailsPageContent: FC = () => {
  return useObserver(() => {
    return (
      <div className="constructor-page-content">
        <p className="page-content-title page-content-title--constructor">
          {connectStore.currentTariff?.MarketingProduct?.Title}
        </p>
        <div className="flex-wrapper space-between">
          <div className="constructor-page-content__main-info"></div>
          <ConnectForm headerType="monthPaid">
            <ServiceGroupContainer
              servicesList={connectStore.services.servicesList}
            />
          </ConnectForm>
        </div>
      </div>
    );
  });
};

export default TariffDetailsPageContent;
