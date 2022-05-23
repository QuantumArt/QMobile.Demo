import React from 'react';
import PackageConnectForm from './package-connect-form';

const PackageDetailsPageContainer = (): JSX.Element => {
  return (
    <div>
      <h1 className="package-details__main-title">Наименование пакета</h1>
      <div className="flex-wrapper space-between">
        <PackageConnectForm price={500} />
      </div>
    </div>
  );
};

export default PackageDetailsPageContainer;
