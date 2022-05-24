import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import PackageDetailsPageContainer from '../containers/package-details/package-details-page-container';
import CurrentPathInfo from '../components/current-path-info';
import packagesStore from '../../stores/packages/packages-store';

const PackageDetails = (): JSX.Element => {
  const location = useLocation();
  useEffect(() => {
    const packageId = location.pathname.split('/').slice(-1);
    packagesStore.fetchPackage(packageId[0]);
  }, [location.pathname]);
  return (
    <>
      <div className="package-details__path-wrapper">
        <CurrentPathInfo />
      </div>
      <div>
        <PackageDetailsPageContainer />
      </div>
    </>
  );
};

export default PackageDetails;
