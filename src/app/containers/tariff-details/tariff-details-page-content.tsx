import { useObserver } from 'mobx-react-lite';
import React from 'react';
import connectStore from '../../../stores/connect/connect-store';
import ConnectForm from '../connect-form/connect-form';
import ServiceGroupContainer from '../connect-form/service-group-container';
import MinutesInternetRanges from './minutes-internet-ranges';
import ParametersList from '../parameters-list/parameters-list';
import AdditionalInfo from './additional-info';
import DownloadPdfButton from '../download-pdf-button/download-pdf-button';
import generatePdf from '../../utils/generate-pdf.js';
import { BootState } from '../../enums/boot-state';
import Loader from '../../components/loader';

const TariffDetailsPageContent = (): JSX.Element => {
  const generatePdfHandler = (): void => {
    generatePdf(
      Array.from(connectStore.parametersByGroup),
      connectStore.currentTariff?.MarketingProduct?.Title,
    );
  };

  return useObserver(() =>
    connectStore.bootState === BootState.Loading ? (
      <Loader />
    ) : (
      <div className="constructor-page-content">
        <p className="page-content-title page-content-title--constructor">
          {connectStore.currentTariff?.MarketingProduct?.Title}
        </p>
        <div className="flex-wrapper space-between">
          <div>
            {connectStore.currentTariff?.TariffPackages?.length && (
              <MinutesInternetRanges />
            )}
            <div className="constructor-page-content__main-info parameters-list-container">
              <ParametersList
                paramList={Array.from(connectStore.parametersByGroup)}
                contentType="numbers"
              />
            </div>
          </div>
          <div className="connect-form__container">
            <ConnectForm
              headerType={
                connectStore.currentTariff?.TariffPackages?.length
                  ? 'package'
                  : 'monthPaid'
              }
            >
              {!connectStore.currentTariff?.TariffPackages?.length && (
                <ServiceGroupContainer
                  servicesIds={connectStore.services.servicesIds}
                />
              )}
            </ConnectForm>
            <DownloadPdfButton tariffId={connectStore.currentTariff?.Id} />
          </div>
        </div>
        {connectStore.additionalInfo.size > 0 && (
          <AdditionalInfo paramList={Array.from(connectStore.additionalInfo)} />
        )}
      </div>
    ),
  );
};

export default TariffDetailsPageContent;
