import { useObserver } from 'mobx-react-lite';
import React from 'react';
import connectStore from '../../../stores/connect/connect-store';
import ConnectForm from '../connect-form/connect-form';
import ServiceGroupContainer from '../connect-form/service-group-container';
import ParametersList from '../parameters-list/parameters-list';
import AdditionalInfo from './additional-info';

const TariffDetailsPageContent = (): JSX.Element => {
  return useObserver(() => {
    return (
      <div className="constructor-page-content">
        <p className="page-content-title page-content-title--constructor">
          {connectStore.currentTariff?.MarketingProduct?.Title}
        </p>
        <div className="flex-wrapper space-between">
          <div className="constructor-page-content__main-info parameters-list-container">
            <ParametersList
              paramList={Array.from(connectStore.parametersByGroup)}
            />
          </div>
          <ConnectForm headerType="monthPaid">
            <ServiceGroupContainer
              servicesList={connectStore.services.servicesList}
            />
          </ConnectForm>
        </div>
        {connectStore.additionalInfo.size > 0 && (
          <AdditionalInfo paramList={Array.from(connectStore.additionalInfo)} />
        )}
      </div>
    );
  });
};

export default TariffDetailsPageContent;
