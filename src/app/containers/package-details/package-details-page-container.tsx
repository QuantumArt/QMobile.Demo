import { useObserver } from 'mobx-react-lite';
import React from 'react';
import packagesStore from '../../../stores/packages/packages-store';
import PackageConnectForm from './package-connect-form';
import PackageItemsContainer from './package-items-container';
import PackageItemsDetails from './package-items-details';

const PackageDetailsPageContainer = (): JSX.Element => {
  return useObserver(() => (
    <div>
      <h1 className="package-details__main-title">
        {packagesStore.currentPackage?.MarketingProduct?.Title}
      </h1>
      <div className="flex-wrapper space-between">
        <div className="package-details__package-info-container">
          <PackageItemsContainer itemsList={packagesStore.itemsInPackage} />
          <PackageItemsDetails itemsList={packagesStore.itemsInPackage} />
        </div>
        <PackageConnectForm price={packagesStore.packagePrice} />
      </div>
    </div>
  ));
};

export default PackageDetailsPageContainer;
