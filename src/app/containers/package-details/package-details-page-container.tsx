import { useObserver } from 'mobx-react-lite';
import React from 'react';
import packagesStore from '../../../stores/packages/packages-store';
import ParametersList from '../parameters-list/parameters-list';
import PackageConnectForm from './package-connect-form';
import PackagesItemsContainer from './packages-items-container';

const PackageDetailsPageContainer = (): JSX.Element => {
  return useObserver(() => (
    <div>
      <h1 className="package-details__main-title">
        {packagesStore.currentPackage?.MarketingProduct?.Title}
      </h1>
      <div className="flex-wrapper space-between">
        <div className="package-details__package-info-container">
          <PackagesItemsContainer itemsList={packagesStore.itemsInPackage} />
          {/* <ParametersList /> */}
        </div>
        <PackageConnectForm price={packagesStore.packagePrice} />
      </div>
    </div>
  ));
};

export default PackageDetailsPageContainer;
