import React from 'react';
import PackageDetailsPageContainer from '../containers/package-details/package-details-page-container';
import CurrentPathInfo from '../components/current-path-info';

const PackageDetails = (): JSX.Element => {
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
