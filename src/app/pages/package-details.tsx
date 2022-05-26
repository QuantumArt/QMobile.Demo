import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useObserver } from 'mobx-react-lite';

import PackageDetailsPageContainer from '../containers/package-details/package-details-page-container';
import CurrentPathInfo from '../components/current-path-info';
import packagesStore from '../../stores/packages/packages-store';

const PackageDetails = (): JSX.Element => {
  const location = useLocation();
  useEffect(() => {
    const packageId = location.pathname.split('/').slice(-1);
    packagesStore.fetchPackage(packageId[0]);
  }, [location.pathname]);

  useEffect(() => () => {
    packagesStore.unmount();
  });

  return useObserver(() => (
    <div className="container">
      <div className="package-details__path-wrapper">
        <CurrentPathInfo
          elementName={packagesStore.currentPackage?.MarketingProduct.Title}
        />
      </div>
      <div>
        <PackageDetailsPageContainer />
      </div>
    </div>
  ));
};

export default PackageDetails;
